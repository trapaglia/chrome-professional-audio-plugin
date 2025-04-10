document.getElementById("activar").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "activarEcualizador" }, (response) => {
    document.getElementById("estado").textContent = response?.mensaje || "Algo salió mal 💔";
  });
});

/* background.js */
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "activarEcualizador") {
    chrome.tabCapture.capture({ audio: true, video: false }, (stream) => {
      if (!stream) {
        console.error("No se pudo capturar el stream");
        sendResponse({ mensaje: "No se pudo capturar el audio 😢" });
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

      console.log("Audio ecualizado correctamente 🎶");
      sendResponse({ mensaje: "¡Audio ecualizado con amor! 🎶" });
    });
    return true; // Necesario para enviar respuesta asincrónica
  }
});