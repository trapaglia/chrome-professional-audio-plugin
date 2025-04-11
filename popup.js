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
  });
});

document.getElementById("volumen").addEventListener("input", async (e) => {
  const tabId = await getActiveTabId();
  await chrome.runtime.sendMessage({
    type: "adjust-volume",
    target: "offscreen",
    tabId,
    level: parseFloat(e.target.value)
  });
});