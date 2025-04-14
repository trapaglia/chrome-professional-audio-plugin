// Clear previous session ID's.
chrome.runtime.onStartup.addListener(function() {
  console.log("[INFO] Browser opened CLEARING CACHE");
  chrome.storage.local.clear();
});


chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  // if (message.target !== "offscreen") return;
  switch (message.type) {
    case "ajustar-filtro":
      await createOffscreenDocument();
      chrome.runtime.sendMessage({ ...message, target: "offscreen" });
      console.log("[INFO] filtro ajustado");
      break;
    case "start-processing":
      await createOffscreenDocument();
      chrome.runtime.sendMessage({ ...message, target: "offscreen" });
      console.log("[INFO] inicio de procesamiento");
      break;
    case "stop-processing":
      await createOffscreenDocument();
      chrome.runtime.sendMessage({ ...message, target: "offscreen" });
      console.log("[INFO] fin de procesamiento");
      break;
    case "offscreen-alive":
      console.log("[INFO] offscreen-alive");
      break;
    case "debug":
      console.log("[INFO] debug");
      chrome.runtime.sendMessage({ ...message, target: "offscreen" });
      break;
    case "give-me-viz":
      // await createOffscreenDocument();
      // chrome.runtime.sendMessage({ ...message, target: "offscreen" });
      break;
    default:
      // console.log("[ERROR] message no identificado");
      break;
  }


});

async function createOffscreenDocument(){
    // OFFSCREEN document
    if (await chrome.offscreen.hasDocument()) {
      console.log("Offscreen document already exists");
    }
    else{
      console.log("Creating offscreen document");
      await chrome.offscreen.createDocument({
        url: 'offscreen.html',
        reasons: ['USER_MEDIA'],
        justification: 'Adjust tab audio'
      });
    }
}