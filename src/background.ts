// Clear previous session ID's.
chrome.runtime.onStartup.addListener(function() {
  console.log("[INFO] Browser opened CLEARING CACHE");
  chrome.storage.local.clear();
});

let popupOpenedBefore: boolean = false;

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  console.log("[DEBUG BG] Mensaje recibido en background:", message);
  
  if (message.target !== "background") {
    console.log("[DEBUG BG] Mensaje no dirigido a background, ignorando");
    return;
  }
  
  try {
    switch (message.type) {
      case "offscreen-wakeup":
        console.log("[DEBUG BG] Solicitud de despertar offscreen recibida");
        if (await createOffscreenDocument()) {
          console.log("[DEBUG BG] Documento offscreen creado, esperando 500ms antes de enviar wakeup");
          // Agregar un pequeño delay para dar tiempo al documento offscreen a inicializarse
          setTimeout(() => {
            console.log("[DEBUG BG] Enviando wakeup al documento offscreen");
            chrome.runtime.sendMessage({ type: "offscreen-wakeup", target: "offscreen" })
              .catch(err => console.log("[DEBUG BG] Error al enviar wakeup (esperado si offscreen aún no está listo):", err));
          }, 500);
        }
        else console.log("[DEBUG BG] Documento offscreen ya existe");
        break;
        
      case "create-offscreen":
        console.log("[DEBUG BG] Creando documento offscreen...");
        if (!(await chrome.offscreen.hasDocument())) {
          console.log("[DEBUG BG] Documento offscreen no existe, creando...");
          try {
            await chrome.offscreen.createDocument({
              url: "offscreen.html",
              reasons: [chrome.offscreen.Reason.AUDIO_PLAYBACK],
              justification: "Necesario para procesar audio de pestaña",
            });
            console.log("[DEBUG BG] Documento offscreen creado exitosamente");
            sendResponse({ success: true });
          } catch (offscreenError) {
            console.error("[DEBUG BG] Error al crear documento offscreen:", offscreenError);
            sendResponse({ success: false, error: offscreenError });
          }
        }
        else {
          console.log("[DEBUG BG] Documento offscreen ya existe");
          sendResponse({ success: true, exists: true });
        }
        break;
        
      case "check-first-popup-open":
        console.log("[DEBUG BG] Verificando primera apertura del popup...");
        // Esta técnica evita el problema con mensajes asíncronos
        (async () => {
          try {
            const hasDocument = await chrome.offscreen.hasDocument();
            console.log("[DEBUG BG] Estado de documento offscreen:", hasDocument);
            
            if (!popupOpenedBefore && !hasDocument) {
              console.log("[DEBUG BG] Primera apertura confirmada, enviando respuesta...");
              popupOpenedBefore = true;
              
              // En lugar de usar sendResponse, enviamos un mensaje de vuelta
              chrome.runtime.sendMessage({
                type: "first-open-response",
                isFirstOpen: true
              }).catch(error => {
                console.log("[DEBUG BG] Error enviando respuesta (esperado):", error);
              });
              
            } else {
              console.log("[DEBUG BG] No es primera apertura, enviando respuesta...");
              
              // En lugar de usar sendResponse, enviamos un mensaje de vuelta
              chrome.runtime.sendMessage({
                type: "first-open-response",
                isFirstOpen: false
              }).catch(error => {
                console.log("[DEBUG BG] Error enviando respuesta (esperado):", error);
              });
            }
          } catch (error: any) { 
            console.error("[DEBUG BG] Error al verificar documento offscreen:", error);
            
            // En caso de error, asumimos que no es primera apertura
            chrome.runtime.sendMessage({
              type: "first-open-response",
              isFirstOpen: false,
              error: true,
              message: error.message || 'Error desconocido'
            }).catch(err => {
              console.log("[DEBUG BG] Error enviando mensaje de error (esperado):", err);
            });
          }
        })();
        // Mantenemos este return por compatibilidad
        return true;
        
      default:
        console.log("[DEBUG BG] Mensaje no identificado:", message);
        sendResponse({ success: false, error: "Mensaje no identificado" });
        break;
    }
  } catch (generalError: any) { 
    console.error("[DEBUG BG] Error general en el listener:", generalError);
    sendResponse({ success: false, error: generalError?.message || 'Error desconocido' });
  }
  
  // Este return true es crucial para operaciones asíncronas
  return true;
});

async function createOffscreenDocument(){
    // OFFSCREEN document
    if (await chrome.offscreen.hasDocument()) {
      console.log("Offscreen document already exists");
      return false;
    }
    else{
      console.log("Creating offscreen document");
      await chrome.offscreen.createDocument({
        url: 'offscreen.html',
        reasons: ['USER_MEDIA'],
        justification: 'Adjust tab audio'
      });
      return true;
    }
}