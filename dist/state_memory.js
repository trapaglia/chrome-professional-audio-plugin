var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getCompresorActivo, getCompresorParam, setCompresorActivo, setCompresorParam } from "./config.js";
export let capturingAudio = false;
;
export function saveValue(valueName, value) {
    chrome.storage.local.set({ [valueName]: value });
}
// Función para cargar el estado guardado
export function cargarEstado() {
    chrome.storage.local.get("estado", function (data) {
        if (data.estado) {
            const estado = data.estado;
            capturingAudio = estado.capturingAudio;
            if (capturingAudio) {
                const boton = document.getElementById("activar");
                if (!boton)
                    throw new Error("No se encontró el botón de activar");
                boton.textContent = "Detener Audio 🔇";
            }
            // Cargar volumen
            if (estado.gainAudio !== undefined) {
                const volumen = document.getElementById("volumen");
                if (!volumen)
                    throw new Error("No se encontró el slider de volumen");
                volumen.value = estado.gainAudio.toString();
                const volumen_value = document.getElementById("volumen-value");
                if (!volumen_value)
                    throw new Error("No se encontró el valor de volumen");
                volumen_value.textContent = `${estado.gainAudio} dB`;
            }
            // Cargar modo oscuro
            if (estado.darkMode !== undefined) {
                if (estado.darkMode) {
                    document.body.classList.add('dark-mode');
                    const dark_mode_enabled = document.getElementById('dark-mode');
                    if (!dark_mode_enabled)
                        throw new Error("No se encontró el checkbox de modo oscuro");
                    dark_mode_enabled.checked = true;
                }
                else {
                    document.body.classList.remove('dark-mode');
                    const dark_mode_enabled = document.getElementById('dark-mode');
                    if (!dark_mode_enabled)
                        throw new Error("No se encontró el checkbox de modo oscuro");
                    dark_mode_enabled.checked = false;
                }
            }
            // Cargar configuración del compresor
            if (estado.compresor) {
                const compresor_activo = document.getElementById('compresor-activo');
                if (!compresor_activo)
                    throw new Error("No se encontró el checkbox de compresor activo");
                compresor_activo.checked = estado.compresor.activo;
                setCompresorActivo(estado.compresor.activo);
                if (estado.compresor.threshold !== undefined) {
                    const threshold = document.getElementById('threshold');
                    if (!threshold)
                        throw new Error("No se encontró el slider de threshold");
                    threshold.value = estado.compresor.threshold.toString();
                    setCompresorParam('threshold', parseFloat(threshold.value));
                }
                if (estado.compresor.ratio !== undefined) {
                    const ratio = document.getElementById('ratio');
                    if (!ratio)
                        throw new Error("No se encontró el slider de ratio");
                    ratio.value = estado.compresor.ratio.toString();
                    setCompresorParam('ratio', parseFloat(ratio.value));
                }
                if (estado.compresor.knee !== undefined) {
                    const knee = document.getElementById('knee');
                    if (!knee)
                        throw new Error("No se encontró el slider de knee");
                    knee.value = estado.compresor.knee.toString();
                    setCompresorParam('knee', parseFloat(knee.value));
                }
                if (estado.compresor.attack !== undefined) {
                    const attack = document.getElementById('attack');
                    if (!attack)
                        throw new Error("No se encontró el slider de attack");
                    attack.value = estado.compresor.attack.toString();
                    setCompresorParam('attack', parseFloat(attack.value));
                }
                if (estado.compresor.release !== undefined) {
                    const release = document.getElementById('release');
                    if (!release)
                        throw new Error("No se encontró el slider de release");
                    release.value = estado.compresor.release.toString();
                    setCompresorParam('release', parseFloat(release.value));
                }
            }
        }
    });
}
// Guardar y restaurar estado de los 8 sliders + estado de audio
export function guardarEstado() {
    const volumen = document.getElementById("volumen");
    if (!volumen)
        throw new Error("No se encontró el slider de volumen");
    const estado = {
        capturingAudio: capturingAudio,
        darkMode: document.body.classList.contains('dark-mode'),
        compresor: {
            activo: getCompresorActivo(),
            threshold: getCompresorParam('threshold'),
            ratio: getCompresorParam('ratio'),
            knee: getCompresorParam('knee'),
            attack: getCompresorParam('attack'),
            release: getCompresorParam('release')
        },
        gainAudio: parseFloat(volumen.value)
    };
    chrome.storage.local.set(estado);
}
// Función para cargar la lista de presets en el selector
export function cargarListaPresets() {
    const presetSelect = document.getElementById('preset-select');
    if (!presetSelect)
        throw new Error("No se encontró el selector de presets");
    // Limpiar opciones actuales
    while (presetSelect.options.length > 1) {
        presetSelect.remove(1);
    }
    // Cargar presets desde storage
    chrome.storage.local.get(['presets'], (result) => {
        const presets = result.presets || {};
        // Agregar cada preset como una opción
        Object.keys(presets).forEach(nombrePreset => {
            const option = document.createElement('option');
            option.value = nombrePreset;
            option.textContent = nombrePreset;
            presetSelect.appendChild(option);
        });
    });
}
export function clearStorage() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("[INFO] Primera apertura del popup desde la inicialización - Limpiando storage");
        // Limpiar todas las variables guardadas
        yield chrome.storage.local.clear();
        // Guardar que el audio está desactivado
        chrome.storage.local.set({ capturingAudio: false });
    });
}
