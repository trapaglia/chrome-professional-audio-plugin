// chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
//   if (message.type === "start-processing") {
//     const has = await chrome.offscreen.hasDocument();
//     if (!has) {
//       await chrome.offscreen.createDocument({
//         url: "offscreen.html",
//         reasons: ["USER_MEDIA"],
//         justification: "Procesar audio de la pestaña con amor 💖"
//       });
//     }
//     chrome.runtime.sendMessage(message);
//   }
//   if (message.type === "ajustar-filtro") {
//     chrome.runtime.sendMessage(message);
//   }
// });


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
