let tabId;
let stream;

document.getElementById("abrir").addEventListener("click", () => {
  chrome.tabCapture.capture({ audio: true, video: false }, (capturedStream) => {
    if (!capturedStream) {
      alert("No se pudo capturar el audio 😢");
      return;
    }
    stream = capturedStream;
    chrome.runtime.sendMessage({ action: "abrir_tab", audioStreamId: "stream-started" });
  });
});

["graves", "medios", "agudos"].forEach((id) => {
  document.getElementById(id).addEventListener("input", (e) => {
    if (tabId) {
      chrome.tabs.sendMessage(tabId, {
        banda: id,
        valor: parseFloat(e.target.value),
      });
    }
  });
});