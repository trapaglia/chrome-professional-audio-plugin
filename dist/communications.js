var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { dbToGain } from "./utils.js";
import { localEstado } from "./state_memory.js";
import { compresorActivo, compresorParams } from "./config.js";
// Función para enviar la configuración al offscreen
export function enviarConfiguracionAlOffscreen(config) {
    return __awaiter(this, void 0, void 0, function* () {
        const tabId = yield getActiveTabId();
        // Enviar configuración del volumen
        chrome.runtime.sendMessage({
            type: "ajustar-volumen",
            target: "offscreen",
            tabId,
            level: dbToGain(config.volumen)
        });
        // Enviar configuración del compresor
        yield enviarConfiguracionCompresor();
    });
}
// Función para enviar la configuración del compresor al script offscreen
export function enviarConfiguracionCompresor() {
    return __awaiter(this, void 0, void 0, function* () {
        if (localEstado.capturingAudio) {
            const tabId = yield getActiveTabId();
            chrome.runtime.sendMessage({
                type: "ajustar-compresor",
                target: "offscreen",
                tabId,
                activo: compresorActivo,
                params: {
                    threshold: compresorParams.threshold,
                    ratio: compresorParams.ratio,
                    knee: compresorParams.knee,
                    attack: compresorParams.attack,
                    release: compresorParams.release
                }
            });
        }
    });
}
