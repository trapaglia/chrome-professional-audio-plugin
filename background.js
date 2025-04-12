let creandoOffscreen = null;

async function asegurarOffscreen() {
  if (await chrome.offscreen.hasDocument()) return;
  if (!creandoOffscreen) {
    creandoOffscreen = chrome.offscreen.createDocument({
      url: "offscreen.html",
      reasons: ["USER_MEDIA"],
      justification: "Visualizador necesita amor 💞"
    }).finally(() => {
      // 🔓 Limpiamos la promesa para futuras llamadas
      creandoOffscreen = null;
    });
  }
  return creandoOffscreen;
}

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {

  if (message.type === "abrir-offscreen") {
    await asegurarOffscreen();
    sendResponse()
    return true;
  }
  
  if (message.target === "offscreen") {
    await asegurarOffscreen();
    // reenviar el mensaje al offscreen.js
    chrome.runtime.sendMessage(message);
  }

});

async function asegurarOffscreen() {
  const exists = await chrome.offscreen.hasDocument();
  if (!exists) {
    await chrome.offscreen.createDocument({
      url: "offscreen.html",
      reasons: ["USER_MEDIA"],
      justification: "Visualizador necesita amor 💞"
    });
  }
}

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {

  if (message.type === "abrir-offscreen") {
    await asegurarOffscreen();
    sendResponse()
    return true;
  }
  
  if (message.target === "offscreen") {
    await asegurarOffscreen();
    // reenviar el mensaje al offscreen.js
    chrome.runtime.sendMessage(message);
  }

});

async function asegurarOffscreen() {
  const exists = await chrome.offscreen.hasDocument();
  if (!exists) {
    await chrome.offscreen.createDocument({
      url: "offscreen.html",
      reasons: ["USER_MEDIA"],
      justification: "Visualizador necesita amor 💞"
    });
  }
}

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {

  if (message.type === "abrir-offscreen") {
    await asegurarOffscreen();
    sendResponse()
    return true;
  }
  
  if (message.target === "offscreen") {
    await asegurarOffscreen();
    // reenviar el mensaje al offscreen.js
    chrome.runtime.sendMessage(message);
  }

});
