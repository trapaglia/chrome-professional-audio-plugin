// Clear previous session ID's.
chrome.runtime.onStartup.addListener(function() {
  console.log("[INFO] Browser opened CLEARING CACHE");
  chrome.storage.local.clear();
});

let popupOpenedBefore: boolean = false;


chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.target !== "background") return;
  switch (message.type) {
    case "offscreen-wakeup":
      if (await createOffscreenDocument())
        chrome.runtime.sendMessage({ type: "offscreen-wakeup", target: "offscreen" });
      else console.log("[INFO] Offscreen document already exists")
      break;
    case "check-first-popup-open":
      if (!popupOpenedBefore && !(await chrome.offscreen.hasDocument())) {
        console.log("[INFO] Popup opened for the first time");
        popupOpenedBefore = true;
        sendResponse({ isFirstOpen: true });
      } else {
        console.log("[INFO] Popup opened before");
        sendResponse({ isFirstOpen: false });
      }
      return true;
    default:
      console.log("[ERROR] message no identificado");
      break;
  }


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