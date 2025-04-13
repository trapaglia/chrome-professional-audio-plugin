let contexts = new Map();
let filtros = new Map();
let medias = new Map();
let popupPort = null;
let loops = new Map();
let viz = new Map();

// Función para asegurar que la página offscreen está lista y responder al mensaje
async function asegurarOffscreen() {
  console.log("[OFFSCREEN] Página offscreen lista y funcionando 🚀");
  // Simplemente devolvemos true para indicar que la página offscreen está lista
  return true;
}

chrome.runtime.onConnect.addListener((port) => {
  if (port.name === "popup-visualizer") {
    popupPort = port;
    console.log("[OFFSCREEN] Conectado al popup 🥰");

    port.onDisconnect.addListener(() => {
      popupPort = null;
      console.log("[OFFSCREEN] Popup cerrado 😢");
    });
  }
});

chrome.runtime.onMessage.addListener(async (msg) => {
  if (msg.target !== "offscreen") return;

  if (msg.type === "start-processing") {
    const media = await navigator.mediaDevices.getUserMedia({
      audio: {
        mandatory: {
          chromeMediaSource: "tab",
          chromeMediaSourceId: msg.streamId,
        },
      },
    });

    const context = new AudioContext();
    const source = context.createMediaStreamSource(media);

    const volume = context.createGain();
    volume.gain.value = msg.level;
    
    const low = context.createBiquadFilter();
    low.type = "lowshelf";
    low.frequency.value = 60;
    low.gain.value = msg.graves;

    const mid = context.createBiquadFilter();
    mid.type = "peaking";
    mid.frequency.value = 1000;
    mid.Q.value = 1;
    mid.gain.value = msg.medios;

    const high = context.createBiquadFilter();
    high.type = "highshelf";
    high.frequency.value = 8000;
    high.gain.value = msg.agudos;

    const analyser = context.createAnalyser();
    analyser.fftSize = 256; // resolución (más alto = más detalle)

    // conectar: source → volume → low → mid → high → output
    source.connect(volume);
    volume.connect(low);
    low.connect(mid);
    mid.connect(high);
    high.connect(analyser);
    analyser.connect(context.destination);

    chrome.runtime.sendMessage({ type: "offscreen-alive" });
    // enviar data al popup
    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    function loop() {
      analyser.getByteFrequencyData(dataArray);
      if (popupPort) {
        popupPort.postMessage({
          type: "visualizer-data",
          data: Array.from(dataArray)
        });
      }
    }
    // const id = requestAnimationFrame(loop);
    // loops.set(msg.tabId, id);
    // }
    // loop();

    contexts.set(msg.tabId, context);
    filtros.set(msg.tabId, {volume, low, mid, high});
    medias.set(msg.tabId, media);
    viz.set(msg.tabId, analyser);
  }
  if (msg.type === "debug") {
    const v = viz.get(msg.tabId);
    const dataArray = new Uint8Array(v.frequencyBinCount);
    function loop() {
      v.getByteFrequencyData(dataArray);
      if (popupPort) {
        popupPort.postMessage({
          type: "visualizer-data",
          data: Array.from(dataArray)
        });
      }
    }
    loop();

    console.log("[INFO] Debug message received");
  }

  if (msg.type === "ajustar-filtro") {
    const f = filtros.get(msg.tabId);
    if (!f) return;

    switch (msg.banda) {
      case "volumen":
        f.volume.gain.value = msg.valor;
        break;
      case "graves":
        f.low.gain.value = msg.valor;
        break;
      case "medios":
        f.mid.gain.value = msg.valor;
        break;
      case "agudos":
        f.high.gain.value = msg.valor;
        break;
    }
  }
  if (msg.type === "stop-processing") {
    const ctx = contexts.get(msg.tabId);
    if (ctx) {
      ctx.close(); // cierra el AudioContext
      contexts.delete(msg.tabId);

      const f = filtros.get(msg.tabId);
      if (f) {
        f.volume.disconnect();
        f.low.disconnect();
        f.mid.disconnect();
        f.high.disconnect();
        filtros.delete(msg.tabId);
      }

      const media = medias.get(msg.tabId);
      if (media) {
        media.getTracks().forEach(track => track.stop());
      }
      medias.delete(msg.tabId);
    }
  }

});