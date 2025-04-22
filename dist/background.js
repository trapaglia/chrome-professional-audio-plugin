"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Clear previous session ID's.
chrome.runtime.onStartup.addListener(function () {
    console.log("[INFO] Browser opened CLEARING CACHE");
    chrome.storage.local.clear();
});
let popupOpenedBefore = false;
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => __awaiter(void 0, void 0, void 0, function* () {
    if (message.target !== "background")
        return;
    switch (message.type) {
        case "offscreen-wakeup":
            if (yield createOffscreenDocument())
                chrome.runtime.sendMessage({ type: "offscreen-wakeup", target: "offscreen" });
            else
                console.log("[INFO] Offscreen document already exists");
            break;
        case "check-first-popup-open":
            if (!popupOpenedBefore) {
                popupOpenedBefore = true;
                sendResponse({ isFirstOpen: true });
            }
            else {
                sendResponse({ isFirstOpen: false });
            }
            return true;
        default:
            // console.log("[ERROR] message no identificado");
            break;
    }
}));
function createOffscreenDocument() {
    return __awaiter(this, void 0, void 0, function* () {
        // OFFSCREEN document
        if (yield chrome.offscreen.hasDocument()) {
            console.log("Offscreen document already exists");
            return false;
        }
        else {
            console.log("Creating offscreen document");
            yield chrome.offscreen.createDocument({
                url: 'offscreen.html',
                reasons: ['USER_MEDIA'],
                justification: 'Adjust tab audio'
            });
            return true;
        }
    });
}
