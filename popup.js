let isActivo = false;
let boton = document.getElementById("activar");

async function getActiveTabId() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab.id;
}

boton.addEventListener("click", async () => {
  const tabId = await getActiveTabId();

  if (!isActivo) {
    const streamId = await chrome.tabCapture.getMediaStreamId({ targetTabId: tabId });
    await chrome.runtime.sendMessage({
      type: "start-processing",
      target: "offscreen",
      tabId,
      streamId,
      level: parseFloat(document.getElementById("volumen").value),
      graves: parseFloat(document.getElementById("graves").value),
      medios: parseFloat(document.getElementById("medios").value),
      agudos: parseFloat(document.getElementById("agudos").value),
    });
    boton.textContent = "Detener Audio 🔇";
    isActivo = true;
  } else {
    await chrome.runtime.sendMessage({
      type: "stop-processing",
      target: "offscreen",
      tabId,
    });
    boton.textContent = "Activar Audio 🎤";
    isActivo = false;
  }

});

["volumen", "graves", "medios", "agudos"].forEach((id) => {
  document.getElementById(id).addEventListener("input", async (e) => {
    const tabId = await getActiveTabId();
    chrome.runtime.sendMessage({
      type: "ajustar-filtro",
      target: "offscreen",
      tabId,
      banda: id,
      valor: parseFloat(e.target.value),
    });
  });
});