// Almacenar el stream capturado
let capturedStream = null;

// Escuchar mensajes del ecualizador
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Obtener el stream capturado
  if (message.action === "get_stream") {
    console.log("Solicitud de stream recibida en content.js");
    
    // Verificar si tenemos el stream
    if (!capturedStream) {
      console.error("No hay stream disponible en content.js");
      sendResponse({ success: false, error: "No hay stream disponible" });
      return true;
    }
    
    // Verificar si el streamId coincide
    if (capturedStream.id !== message.streamId) {
      console.error("El ID del stream no coincide");
      sendResponse({ success: false, error: "El ID del stream no coincide" });
      return true;
    }
    
    // Enviar el stream
    sendResponse({ success: true, stream: capturedStream });
    return true;
  }
  
  return false;
});

// Guardar el stream cuando se carga la página
window.addEventListener('DOMContentLoaded', () => {
  // Obtener el stream de la pestaña actual
  navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(stream => {
      capturedStream = stream;
      console.log("Stream capturado en content.js:", stream.id);
    })
    .catch(error => {
      console.error("Error al capturar el stream en content.js:", error);
    });
});
