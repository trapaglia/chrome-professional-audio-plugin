let contexts = new Map();
let filtros = {
  sub: null,     // lowshelf 60Hz
  bass: null,    // peaking 160Hz
  lowMid: null,  // peaking 400Hz
  mid: null,     // peaking 1000Hz
  highMid: null, // peaking 2500Hz
  high: null,    // peaking 6000Hz
  air: null      // highshelf 10000Hz
};

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

    setupEQ(context, source, msg);
    medias.set(msg.tabId, media);
    chrome.runtime.sendMessage({ type: "offscreen-alive" });

  }

  if (msg.type === "ajustar-filtro") {
    const f = filtros;
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
    const ctx = contexts.get(msg.tabId);
    if (ctx) {
      ctx.close(); // cierra el AudioContext
      contexts.delete(msg.tabId);

      const f = filtros;
      if (f) {
        f.sub.disconnect();
        f.bass.disconnect();
        f.lowMid.disconnect();
        f.mid.disconnect();
        f.highMid.disconnect();
        f.high.disconnect();
        f.air.disconnect();
      }

      const media = medias.get(msg.tabId);
      if (media) {
        media.getTracks().forEach(track => track.stop());
      }
      medias.delete(msg.tabId);
    }
  }

});

function setupEQ(context, source, msg) {
  const volume = context.createGain();
  volume.gain.value = msg.level;

  filtros.sub = context.createBiquadFilter();
  filtros.sub.type = "lowshelf";
  filtros.sub.frequency.value = 60;
  filtros.sub.gain.value = msg.sub;

  filtros.bass = context.createBiquadFilter();
  filtros.bass.type = "peaking";
  filtros.bass.frequency.value = 160;
  filtros.bass.Q.value = 1;
  filtros.bass.gain.value = msg.bass;

  filtros.lowMid = context.createBiquadFilter();
  filtros.lowMid.type = "peaking";
  filtros.lowMid.frequency.value = 400;
  filtros.lowMid.Q.value = 1;
  filtros.lowMid.gain.value = msg.lowMid;

  filtros.mid = context.createBiquadFilter();
  filtros.mid.type = "peaking";
  filtros.mid.frequency.value = 1000;
  filtros.mid.Q.value = 1;
  filtros.mid.gain.value = msg.mid;

  filtros.highMid = context.createBiquadFilter();
  filtros.highMid.type = "peaking";
  filtros.highMid.frequency.value = 2500;
  filtros.highMid.Q.value = 1;
  filtros.highMid.gain.value = msg.highMid;

  filtros.high = context.createBiquadFilter();
  filtros.high.type = "peaking";
  filtros.high.frequency.value = 6000;
  filtros.high.Q.value = 1;
  filtros.high.gain.value = msg.high;

  filtros.air = context.createBiquadFilter();
  filtros.air.type = "highshelf";
  filtros.air.frequency.value = 10000;
  filtros.air.gain.value = msg.air;


  pre_viz = new AnalyserNode(context, {
    fftSize: 2048,
    maxDecibels: -25,
    minDecibels: -100,
    smoothingTimeConstant: 0.4,
  });

  post_viz= new AnalyserNode(context, {
    fftSize: 2048,
    maxDecibels: -25,
    minDecibels: -100,
    smoothingTimeConstant: 0.4,
  });

  // 🔗 Conectar filtros en cadena
  source.connect(pre_viz);
  pre_viz.connect(filtros.sub);
  filtros.sub.connect(filtros.bass);
  filtros.bass.connect(filtros.lowMid);
  filtros.lowMid.connect(filtros.mid);
  filtros.mid.connect(filtros.highMid);
  filtros.highMid.connect(filtros.high);
  filtros.high.connect(filtros.air);
  filtros.air.connect(post_viz);
  post_viz.connect(context.destination);

  contexts.set(msg.tabId, context);
}
