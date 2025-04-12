chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.target !== "offscreen") return;

  const offscreenExists = await chrome.offscreen.hasDocument();

  if (!offscreenExists) {
    await chrome.offscreen.createDocument({
      url: "offscreen.html",
      reasons: ["USER_MEDIA"],
      justification: "Procesamiento de audio de la pestaña con filtros de amor 💖",
    });
    // reenviar el mensaje al offscreen.js
    chrome.runtime.sendMessage(message);
  }

});
