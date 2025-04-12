let contexts = new Map();
let filtros = new Map();
let streams = new Map();
let loops = new Map(); // tabId => requestId
let popupPort = null;

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
      const id = requestAnimationFrame(loop);
      loops.set(msg.tabId, id);
    }
    loop();

    contexts.set(msg.tabId, context);
    contexts.set(msg.tabId, context);
    filtros.set(msg.tabId, {volume, low, mid, high});
    streams.set(msg.tabId, media);
  }

  if (msg.type === "ajustar-filtro") {
    const f = filtros.get(msg.tabId);
    if (!f) return;

    switch (msg.banda) {
      case "volumen": f.volume.gain.value = msg.valor; break;
      case "graves": f.low.gain.value = msg.valor; break;
      case "medios": f.mid.gain.value = msg.valor; break;
      case "agudos": f.high.gain.value = msg.valor; break;
    }
  }
  if (msg.type === "stop-processing") {
    const ctx = contexts.get(msg.tabId);
    if (ctx) {
      const loopId = loops.get(msg.tabId);
      if (loopId) {
        cancelAnimationFrame(loopId);
        loops.delete(msg.tabId);
      }

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

      const stream = streams.get(msg.tabId);
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
        streams.delete(msg.tabId);
      }
    }
  }

});