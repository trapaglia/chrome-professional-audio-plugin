var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { setCompresorActivo, setCompresorParam, compresorActivo, compresorParams } from "./config.js";
import { guardarEstado, localEstado } from "./state_memory.js";
// Función para inicializar los controles del compresor
export function inicializarCompresor() {
    const compresorActivoCheckbox = document.getElementById('compresor-activo');
    if (!compresorActivoCheckbox)
        throw new Error("No se encontró el checkbox de compresor activo");
    const threshold = document.getElementById('threshold');
    if (!threshold)
        throw new Error("No se encontró el slider de threshold");
    const ratio = document.getElementById('ratio');
    if (!ratio)
        throw new Error("No se encontró el slider de ratio");
    const knee = document.getElementById('knee');
    if (!knee)
        throw new Error("No se encontró el slider de knee");
    const attack = document.getElementById('attack');
    if (!attack)
        throw new Error("No se encontró el slider de attack");
    const release = document.getElementById('release');
    if (!release)
        throw new Error("No se encontró el slider de release");
    // Actualizar valores mostrados
    setCompresorParam('threshold', parseFloat(threshold.value));
    setCompresorParam('ratio', parseFloat(ratio.value));
    setCompresorParam('knee', parseFloat(knee.value));
    setCompresorParam('attack', parseFloat(attack.value));
    setCompresorParam('release', parseFloat(release.value));
    // Event listeners para cambios en los controles
    compresorActivoCheckbox.addEventListener('change', function () {
        return __awaiter(this, void 0, void 0, function* () {
            setCompresorActivo(this.checked);
            yield enviarConfiguracionCompresor();
            guardarEstado();
        });
    });
    threshold.addEventListener('input', function () {
        return __awaiter(this, void 0, void 0, function* () {
            actualizarValorCompresor('threshold', parseFloat(this.value));
            setCompresorParam('threshold', parseFloat(this.value));
            yield enviarConfiguracionCompresor();
            guardarEstado();
        });
    });
    ratio.addEventListener('input', function () {
        return __awaiter(this, void 0, void 0, function* () {
            actualizarValorCompresor('ratio', parseFloat(this.value));
            setCompresorParam('ratio', parseFloat(this.value));
            yield enviarConfiguracionCompresor();
            guardarEstado();
        });
    });
    knee.addEventListener('input', function () {
        return __awaiter(this, void 0, void 0, function* () {
            actualizarValorCompresor('knee', parseFloat(this.value));
            setCompresorParam('knee', parseFloat(this.value));
            yield enviarConfiguracionCompresor();
            guardarEstado();
        });
    });
    attack.addEventListener('input', function () {
        return __awaiter(this, void 0, void 0, function* () {
            actualizarValorCompresor('attack', parseFloat(this.value));
            setCompresorParam('attack', parseFloat(this.value));
            yield enviarConfiguracionCompresor();
            guardarEstado();
        });
    });
    release.addEventListener('input', function () {
        return __awaiter(this, void 0, void 0, function* () {
            actualizarValorCompresor('release', parseFloat(this.value));
            setCompresorParam('release', parseFloat(this.value));
            yield enviarConfiguracionCompresor();
            guardarEstado();
        });
    });
}
// Función para actualizar los valores mostrados del compresor
export function actualizarValorCompresor(tipo, valor) {
    const valorElement = document.getElementById(`${tipo}-value`);
    switch (tipo) {
        case 'threshold':
            valorElement.textContent = `${valor} dB`;
            break;
        case 'ratio':
            valorElement.textContent = `${valor}:1`;
            break;
        case 'knee':
            valorElement.textContent = `${valor} dB`;
            break;
        case 'attack':
            // Convertir a milisegundos para mejor legibilidad
            const attackMs = (valor * 1000).toFixed(0);
            valorElement.textContent = `${attackMs} ms`;
            break;
        case 'release':
            // Convertir a milisegundos para mejor legibilidad
            const releaseMs = (valor * 1000).toFixed(0);
            valorElement.textContent = `${releaseMs} ms`;
            break;
    }
}
// Función para enviar la configuración del compresor al script offscreen
function enviarConfiguracionCompresor() {
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
