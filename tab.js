let filtros = {};
let audioContext;

const bandaMap = {
  graves: "low",
  medios: "mid",
  agudos: "high",
};

document.getElementById("activar").addEventListener("click", () => {
  const constraints = {
    audio: true,
    video: false
  };

  chrome.tabCapture.capture(constraints, (stream) => {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
      document.getElementById("estado").textContent = "Error al capturar el audio 😢";
      return;
    }

    try {
      audioContext = new AudioContext();
      const source = audioContext.createMediaStreamSource(stream);

      filtros.low = audioContext.createBiquadFilter();
      filtros.low.type = "lowshelf";
      filtros.low.frequency.value = 60;
      filtros.low.gain.value = 0;

      filtros.mid = audioContext.createBiquadFilter();
      filtros.mid.type = "peaking";
      filtros.mid.frequency.value = 1000;
      filtros.mid.Q.value = 1;
      filtros.mid.gain.value = 0;

      filtros.high = audioContext.createBiquadFilter();
      filtros.high.type = "highshelf";
      filtros.high.frequency.value = 8000;
      filtros.high.gain.value = 0;

      source.connect(filtros.low);
      filtros.low.connect(filtros.mid);
      filtros.mid.connect(filtros.high);
      filtros.high.connect(audioContext.destination);

      document.getElementById("estado").textContent = "¡Audio ecualizado! 🎶";
    } catch (error) {
      console.error('Error al configurar el audio:', error);
      document.getElementById("estado").textContent = "Error al configurar el audio 😢";
    }
  });
});

["graves", "medios", "agudos"].forEach((id) => {
  document.getElementById(id).addEventListener("input", (e) => {
    const filtro = filtros[bandaMap[id]];
    if (filtro) filtro.gain.value = parseFloat(e.target.value);
  });
});