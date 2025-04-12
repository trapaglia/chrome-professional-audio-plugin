async function getActiveTabId() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab.id;
}

document.getElementById("activar").addEventListener("click", async () => {
  const tabId = await getActiveTabId();
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