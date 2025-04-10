document.getElementById("activar").addEventListener("click", () => {
  chrome.tabCapture.capture({ audio: true, video: false }, (stream) => {
    if (!stream) {
      document.getElementById("estado").textContent = "No se pudo capturar el audio 😢";
      return;
    }

    const audioContext = new AudioContext();
    const source = audioContext.createMediaStreamSource(stream);

    const low = audioContext.createBiquadFilter();
    low.type = "lowshelf";
    low.frequency.value = 60;
    low.gain.value = 15;

    const mid = audioContext.createBiquadFilter();
    mid.type = "peaking";
    mid.frequency.value = 1000;
    mid.Q.value = 1;
    mid.gain.value = -10;

    const high = audioContext.createBiquadFilter();
    high.type = "highshelf";
    high.frequency.value = 8000;
    high.gain.value = 12;

    source.connect(low);
    low.connect(mid);
    mid.connect(high);
    high.connect(audioContext.destination);

    document.getElementById("estado").textContent = "¡Audio ecualizado con amor! 🎶";
  });
});
