const filtrosDinamicos = new Map();
const contexts = new Map();
const medias = new Map();
const sources = new Map();
let popupPort = null;
let loops = new Map();
const pre_viz = new Map();
const post_viz = new Map();
const staticFilters = new Map();
// const bandas_filtros = ["sub", "bass", "lowMid", "mid", "highMid", "high", "air"];
const staticFiltering = false;
let offscreenInitialized = false;

// 🎧 offscreen.js — gestión de filtros dinámicos de ecualización 🎛️

chrome.runtime.onMessage.addListener(async (msg) => {
  let filtro = null;
  switch (msg.type) {
    case "actualizar-filtro-dinamico":
      if (!contexts.has(msg.tabId)) {
        console.error("[offscreen] AudioContext no inicializado");
        alert("[offscreen] AudioContext no inicializado");
        return;
      }
      const context = contexts.get(msg.tabId);
      if (!sources.has(msg.tabId)) {
        console.error("[offscreen] MediaStreamSource no inicializado");
        alert("[offscreen] MediaStreamSource no inicializado");
        return;
      }
      const source = sources.get(msg.tabId);

      if (!filtrosDinamicos.has(msg.tabId)) {
        filtrosDinamicos.set(msg.tabId, new Map());
      }
      filtro = filtrosDinamicos.get(msg.tabId).get(msg.filtroId);
      if (!filtro) {
        filtro = {
          node: context.createBiquadFilter(),
          bypass: msg.bypass || false
        };
        filtro.node.type = "peaking";
        source.connect(filtro.node);
        filtro.node.connect(context.destination);
        filtrosDinamicos.get(msg.tabId).set(msg.filtroId, filtro);
      } else {
        // Actualizar el estado de bypass
        filtro.bypass = msg.bypass;
      }

      filtro.node.frequency.value = msg.freq;
      filtro.node.Q.value = msg.q;
      filtro.node.gain.value = filtro.bypass ? 0 : msg.gain; // Si está en bypass, la ganancia es 0
      console.log(`[INFO] Filtro ${msg.filtroId} actualizado: freq=${msg.freq}, Q=${msg.q}, gain=${msg.gain}, bypass=${msg.bypass}`);
      reconectarCadena(msg.tabId);
      break;
    case "eliminar-filtro-dinamico":
      if (!filtrosDinamicos.has(msg.tabId)) {
        filtrosDinamicos.set(msg.tabId, new Map());
        return;
      }
      
      filtro = filtrosDinamicos.get(msg.tabId).get(msg.filtroId);
      if (filtro) {
        filtro.node.disconnect();
        filtrosDinamicos.get(msg.tabId).delete(msg.filtroId);
        reconectarCadena(msg.tabId);
      }
      break;
    default:
      break;
  }
});

chrome.runtime.onConnect.addListener((port) => {
  if (port.name === "popup-visualizer") {
    popupPort = port;
    console.log("[OFFSCREEN] Conectado al popup 🥰");


    // port.postMessage({ type: "start-stream" });

    port.onDisconnect.addListener(() => {
      popupPort = null;
      console.log("[OFFSCREEN] Popup cerrado 😢");
    });

    port.onMessage.addListener((msg) => {
      switch (msg.type) {
        case "start-stream":
          if (medias.has(msg.tabId)) {
            port.postMessage({ type: "start-stream" });
          }
          break;
        case "give-me-viz":
          if (!pre_viz.has(msg.tabId) || !post_viz.has(msg.tabId)) {
            console.log("[ERROR] pre_viz o post_viz no inicializados");
            console.log("[ERROR] tabId: " + msg.tabId);
            console.log("[ERROR] pre_viz: " + pre_viz);
            console.log("[ERROR] post_viz: " + post_viz);
            alert("[offscreen] No se puede capturar el audio en este momento. Intenta recargar la página");
            return;
          }
          // Usar Float32Array para obtener valores en dB
          const pre_bins = new Float32Array(pre_viz.get(msg.tabId).frequencyBinCount);
          pre_viz.get(msg.tabId).getFloatFrequencyData(pre_bins);
          const post_bins = new Float32Array(post_viz.get(msg.tabId).frequencyBinCount);
          post_viz.get(msg.tabId).getFloatFrequencyData(post_bins);
          
          if (popupPort) {
            popupPort.postMessage({
              type: "visualizer-data",
              data: { 
                pre: Array.from(pre_bins), 
                post: Array.from(post_bins),
                minDecibels: pre_viz.get(msg.tabId).minDecibels,
                maxDecibels: pre_viz.get(msg.tabId).maxDecibels
              }
            });
          } else {
            console.log("[ERROR] issue enviando mensaje")
          }
          break;
        default:
          break;
      }
    });
  }
});

chrome.runtime.onMessage.addListener(async (msg) => {
  if (msg.target !== "offscreen") return;

  if (msg.type === "offscreen-wakeup") {
    if (!offscreenInitialized) {
      console.log("[INFO] Primera inicialización del offscreen - Limpiando datos");
      clearAllData();
      offscreenInitialized = true;
    }
    chrome.runtime.sendMessage({ type: "offscreen-alive" });
    return;
  }
  if (msg.type === "start-processing") {
    if (medias.has(msg.tabId)) {
      console.log("[ERROR] Tab already capturing audio");
      return;
    }
    const media = await navigator.mediaDevices.getUserMedia({
      audio: {
        mandatory: {
          chromeMediaSource: "tab",
          chromeMediaSourceId: msg.streamId,
        },
      },
    });
    medias.set(msg.tabId, media);

    const context = new AudioContext();
    contexts.set(msg.tabId, context);
    const source = context.createMediaStreamSource(media);
    sources.set(msg.tabId, source);
    console.log("[INFO] AudioContext inicializado en tab " + msg.tabId);


    pre_viz.set(msg.tabId, new AnalyserNode(context, {
      fftSize: 2048,
      maxDecibels: -25,
      minDecibels: -100,
      smoothingTimeConstant: 0.4,
    }));

    const volume = context.createGain();
    volume.gain.value = msg.level;
    sources.set(msg.tabId + "_volume", volume);

    post_viz.set(msg.tabId, new AnalyserNode(context, {
      fftSize: 2048,
      maxDecibels: -25,
      minDecibels: -100,
      smoothingTimeConstant: 0.4,
    }));
    source.connect(pre_viz.get(msg.tabId));
    pre_viz.get(msg.tabId).connect(volume);
    volume.connect(post_viz.get(msg.tabId));
    post_viz.get(msg.tabId).connect(context.destination);
    console.log("[INFO] AudioContext inicializado")
    console.log("[INFO] MediaStreamSource inicializado")
    // console.log("source:")

    if (staticFiltering)
      setupEQ(context, msg);

    if (popupPort) {
      popupPort.postMessage({ type: "start-stream" });
    }
  }

  if (msg.type === "ajustar-volumen") {
    if (!contexts.has(msg.tabId)) {
      console.log("[ERROR] No hay contexto de audio para ajustar el volumen");
      return;
    }
    
    const volumeNode = sources.get(msg.tabId + "_volume");
    if (volumeNode) {
      console.log("[INFO] Ajustando volumen a " + msg.level);
      volumeNode.gain.value = msg.level;
    } else {
      console.log("[ERROR] No se encontró el nodo de volumen");
    }
  }

  if (msg.type === "ajustar-filtro") {
    const f = staticFilters.get(msg.tabId);
    if (!f) return;

    switch (msg.banda) {
      case "volumen":
        f.volume.gain.value = msg.valor;
        break;
      case "sub":
        f.sub.gain.value = msg.valor;
        break;
      case "bass":
        f.bass.gain.value = msg.valor;
        break;
      case "lowMid":
        f.lowMid.gain.value = msg.valor;
        break;
      case "mid":
        f.mid.gain.value = msg.valor;
        break;
      case "highMid":
        f.highMid.gain.value = msg.valor;
        break;
      case "high":
        f.high.gain.value = msg.valor;
        break;
      case "air":
        f.air.gain.value = msg.valor;
        break;
    }
  }
  if (msg.type === "stop-processing") {
    if (contexts.has(msg.tabId)) {
      let context = contexts.get(msg.tabId);
      console.log("[INFO] Closing AudioContext");
      if (context && context.state === 'running') {
        context.close(); // cierra el AudioContext
        console.log("[INFO] AudioContext cerrado en tab " + msg.tabId);
      } else {
        console.log("[Info] AudioContext already closed !");
      }

      if (staticFilters.has(msg.tabId)) {
        const f = staticFilters.get(msg.tabId);
        f.forEach((filtro) => {
          filtro.disconnect();
        });
      }

      if (filtrosDinamicos.get(msg.tabId).size > 0) {
        const f = Array.from(filtrosDinamicos.get(msg.tabId).values());
        f.forEach((filtro) => {
          filtro.node.disconnect();
        });
      }

      const volume = sources.get(msg.tabId + "_volume");
      if (volume) {
        volume.disconnect();
      }

      const media = medias.get(msg.tabId);
      if (media) {
        media.getTracks().forEach(track => track.stop());
      }
      medias.delete(msg.tabId);
    }
  }

});

function setupEQ(context, msg) {
  staticFilters.set(msg.tabId, new Map());
  const filters = staticFilters.get(msg.tabId);

  filters.set("sub", context.createBiquadFilter());
  filters.get("sub").type = "lowshelf";
  filters.get("sub").frequency.value = 60;
  filters.get("sub").gain.value = msg.sub;

  filters.set("bass", context.createBiquadFilter());
  filters.get("bass").type = "peaking";
  filters.get("bass").frequency.value = 160;
  filters.get("bass").Q.value = 1;
  filters.get("bass").gain.value = msg.bass;

  filters.set("lowMid", context.createBiquadFilter());
  filters.get("lowMid").type = "peaking";
  filters.get("lowMid").frequency.value = 400;
  filters.get("lowMid").Q.value = 1;
  filters.get("lowMid").gain.value = msg.lowMid;

  filters.set("mid", context.createBiquadFilter());
  filters.get("mid").type = "peaking";
  filters.get("mid").frequency.value = 1000;
  filters.get("mid").Q.value = 1;
  filters.get("mid").gain.value = msg.mid;

  filters.set("highMid", context.createBiquadFilter());
  filters.get("highMid").type = "peaking";
  filters.get("highMid").frequency.value = 2500;
  filters.get("highMid").Q.value = 1;
  filters.get("highMid").gain.value = msg.highMid;

  filters.set("high", context.createBiquadFilter());
  filters.get("high").type = "peaking";
  filters.get("high").frequency.value = 6000;
  filters.get("high").Q.value = 1;
  filters.get("high").gain.value = msg.high;

  filters.set("air", context.createBiquadFilter());
  filters.get("air").type = "highshelf";
  filters.get("air").frequency.value = 10000;
  filters.get("air").gain.value = msg.air;


  // 🔗 Conectar filtros en cadena
  pre_viz.get(msg.tabId).connect(filters.get("sub"));
  filters.get("sub").connect(filters.get("bass"));
  filters.get("bass").connect(filters.get("lowMid"));
  filters.get("lowMid").connect(filters.get("mid"));
  filters.get("mid").connect(filters.get("highMid"));
  filters.get("highMid").connect(filters.get("high"));
  filters.get("high").connect(filters.get("air"));
  filters.get("air").connect(post_viz.get(msg.tabId));

}

function reconectarCadena(tabId) {
  if (!contexts.has(tabId) || !sources.has(tabId)) {
    console.log("[ERROR] No hay contexto o fuente para reconectar");
    return;
  }

  const context = contexts.get(tabId);
  const source = sources.get(tabId);
  const volumeNode = sources.get(tabId + "_volume");

  // Desconectar todos los nodos
  source.disconnect();
  if (volumeNode) volumeNode.disconnect();

  // Reconectar la cadena básica
  source.connect(pre_viz.get(tabId));
  pre_viz.get(tabId).connect(volumeNode);
  
  // Reconectar los filtros dinámicos que no están en bypass
  if (filtrosDinamicos.has(tabId)) {
    const filtros = filtrosDinamicos.get(tabId);
    filtros.forEach((filtro, id) => {
      // Desconectar el filtro primero
      filtro.node.disconnect();
      
      if (!filtro.bypass) {
        // Si no está en bypass, conectarlo en la cadena
        source.connect(filtro.node);
        filtro.node.connect(volumeNode);
        console.log(`[INFO] Filtro ${id} conectado (no está en bypass)`);
      } else {
        console.log(`[INFO] Filtro ${id} en bypass - no conectado`);
      }
    });
  }
  
  // Finalizar la cadena
  volumeNode.connect(post_viz.get(tabId));
  post_viz.get(tabId).connect(context.destination);
  
  console.log("[INFO] Cadena de audio reconectada");
}

function clearAllData() {
  console.log("[INFO] Limpiando todas las estructuras de datos del offscreen");
  
  // Desconectar y limpiar todos los nodos de audio
  for (const [tabId, context] of contexts.entries()) {
    try {
      // Detener todos los tracks de audio
      if (medias.has(tabId)) {
        const media = medias.get(tabId);
        media.getTracks().forEach(track => track.stop());
      }
      
      // Cerrar el contexto de audio
      if (context && context.state === 'running') {
        context.close();
      }
    } catch (e) {
      console.error("[ERROR] Error al limpiar contexto para tab", tabId, e);
    }
  }
  
  // Limpiar todas las estructuras de datos
  filtrosDinamicos.clear();
  contexts.clear();
  medias.clear();
  sources.clear();
  loops.clear();
  pre_viz.clear();
  post_viz.clear();
  staticFilters.clear();
  
  console.log("[INFO] Todas las estructuras de datos del offscreen han sido limpiadas");
}
