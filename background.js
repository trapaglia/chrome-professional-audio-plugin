// Variables globales
let audioStream = null;
let ecualizadorTabId = null;

chrome.runtime.onInstalled.addListener(() => {
  console.log("Ecualizador instalado y listo ");
  // Inicializar los valores de los sliders si no existen
  chrome.storage.local.get(['sliderValues'], (result) => {
    if (!result.sliderValues) {
      chrome.storage.local.set({
        sliderValues: {
          graves: 0,
          medios: 0,
          agudos: 0
        }
      });
    }
  });
});

// Manejar mensajes
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Guardar el stream de audio
  if (message.action === "save_stream") {
    audioStream = message.stream;
    sendResponse({ success: true });
    return true;
  }
  
  // Obtener el stream de audio
  if (message.action === "get_stream") {
    sendResponse({ success: true, stream: audioStream });
    return true;
  }
  
  // Obtener los valores de los sliders
  if (message.action === "get_slider_values") {
    chrome.storage.local.get(['sliderValues'], (result) => {
      sendResponse({ success: true, values: result.sliderValues || { graves: 0, medios: 0, agudos: 0 } });
    });
    return true;
  }
  
  // Guardar los valores de los sliders
  if (message.action === "save_slider_values") {
    chrome.storage.local.set({ sliderValues: message.values });
    sendResponse({ success: true });
    return true;
  }
});

// Cuando se cierra una pestaña, verificar si es la del ecualizador
chrome.tabs.onRemoved.addListener((closedTabId) => {
  if (closedTabId === ecualizadorTabId) {
    ecualizadorTabId = null;
    
    // Limpiar el stream si existe
    if (audioStream) {
      try {
        const tracks = audioStream.getTracks();
        tracks.forEach(track => track.stop());
        audioStream = null;
      } catch (error) {
        console.error("Error al limpiar el stream:", error);
      }
    }
  }
});