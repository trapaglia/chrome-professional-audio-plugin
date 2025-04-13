let contexts = new Map();
let filtros = new Map();
let medias = new Map();
let popupPort = null;
let loops = new Map();
let pre_viz = null;
let post_viz = null;

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

    port.postMessage({ type: "start-stream" });

    port.onDisconnect.addListener(() => {
      popupPort = null;
      console.log("[OFFSCREEN] Popup cerrado 😢");
    });

    port.onMessage.addListener((msg) => {
      if (msg.type === "give-me-viz") {
        console.log("[INFO] give-me-viz message received");
        const pre_bins = new Uint8Array(pre_viz.frequencyBinCount);
        pre_viz.getByteFrequencyData(pre_bins);
        const post_bins = new Uint8Array(post_viz.frequencyBinCount);
        post_viz.getByteFrequencyData(post_bins);
        if (popupPort) {
          console.log("[INFO] Sending visualizer data");
          popupPort.postMessage({
            type: "visualizer-data",
            data: { pre: Array.from(pre_bins), post: Array.from(post_bins) }
          });
        } else {
          console.log("[ERROR] issue enviando mensaje")
        }
      }
  });
}});

chrome.runtime.onMessage.addListener(async (msg) => {
  if (msg.target !== "offscreen") return;

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

    // const analyser = context.createAnalyser();
    // analyser.fftSize = 256; // resolución (más alto = más detalle)
    // analyser.fftSize = 2048; // resolución (más alto = más detalle)
    // analyser.maxDecibels = -25;
    // analyser.minDecibels = -60;
    // analyser.smoothingTimeConstant = 0.5;
    const pre_analyser= new AnalyserNode(context, {
      fftSize: 2048,
      maxDecibels: -25,
      minDecibels: -100,
      smoothingTimeConstant: 0.4,
    });

    const post_analyser= new AnalyserNode(context, {
      fftSize: 2048,
      maxDecibels: -25,
      minDecibels: -100,
      smoothingTimeConstant: 0.4,
    });

    // conectar: source → volume → low → mid → high → output
    source.connect(volume);
    volume.connect(pre_analyser);
    pre_analyser.connect(low);
    low.connect(mid);
    mid.connect(high);
    high.connect(post_analyser);
    post_analyser.connect(context.destination);

    chrome.runtime.sendMessage({ type: "offscreen-alive" });

    contexts.set(msg.tabId, context);
    filtros.set(msg.tabId, {volume, low, mid, high});
    medias.set(msg.tabId, media);
    pre_viz = pre_analyser;
    post_viz = post_analyser;
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