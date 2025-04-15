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
        filtro = context.createBiquadFilter();
        filtro.type = "peaking";
        source.connect(filtro);
        filtro.connect(context.destination);
        filtrosDinamicos.get(msg.tabId).set(msg.filtroId, filtro);
      }

      filtro.frequency.value = msg.freq;
      filtro.Q.value = msg.q;
      filtro.gain.value = msg.gain;
      reconectarCadena(msg.tabId);
      break;
    case "eliminar-filtro-dinamico":
      if (!filtrosDinamicos.has(msg.tabId)) {
        filtrosDinamicos.set(msg.tabId, new Map());
      }
      filtro = filtrosDinamicos.get(msg.tabId).get(msg.filtroId);
      if (filtro) {
        filtro.disconnect();
        filtrosDinamicos.get(msg.tabId).delete(msg.filtroId);
      }
      reconectarCadena(msg.tabId);
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
          const pre_bins = new Uint8Array(pre_viz.get(msg.tabId).frequencyBinCount);
          pre_viz.get(msg.tabId).getByteFrequencyData(pre_bins);
          const post_bins = new Uint8Array(post_viz.get(msg.tabId).frequencyBinCount);
          post_viz.get(msg.tabId).getByteFrequencyData(post_bins);
          if (popupPort) {
            popupPort.postMessage({
              type: "visualizer-data",
              data: { pre: Array.from(pre_bins), post: Array.from(post_bins) }
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
          filtro.disconnect();
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
  pre_viz.get(tabId).connect(filters.get("sub"));
  filters.get("sub").connect(filters.get("bass"));
  filters.get("bass").connect(filters.get("lowMid"));
  filters.get("lowMid").connect(filters.get("mid"));
  filters.get("mid").connect(filters.get("highMid"));
  filters.get("highMid").connect(filters.get("high"));
  filters.get("high").connect(filters.get("air"));
  filters.get("air").connect(post_viz.get(tabId));

}

function reconectarCadena(tabId) {
  if (!medias.has(tabId)) return;

  const volume = sources.get(tabId + "_volume");

  let anterior = volume;

  for (const filtro of Array.from(filtrosDinamicos.get(tabId).values())) {
    anterior.disconnect?.();
    anterior.connect(filtro);
    anterior = filtro;
  }

  anterior.disconnect?.();
  anterior.connect(post_viz.get(tabId));
}
