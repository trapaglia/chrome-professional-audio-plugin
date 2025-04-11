chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.type === "start-processing") {
    const has = await chrome.offscreen.hasDocument();
    if (!has) {
      await chrome.offscreen.createDocument({
        url: "offscreen.html",
        reasons: ["USER_MEDIA"],
        justification: "Procesar audio de la pestaña con amor 💖"
      });
    }
    chrome.runtime.sendMessage(message);
  }
  if (message.type === "adjust-volume") {
    chrome.runtime.sendMessage(message);
  }
});