var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { guardarEstado } from "./state_memory.js";
import { compresorParams, setCompresorActivo } from "./config.js";
import { actualizarValorCompresor } from "./compressor.js";
import { localEstado } from "./state_memory.js";
import { enviarConfiguracionAlOffscreen } from "./communications.js";
// Función para aplicar una configuración cargada
export function aplicarConfiguracion(config) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Aplicando configuración:", config);
        // Aplicar volumen
        const volumenSlider = document.getElementById('volumen');
        if (!volumenSlider) {
            console.error("[ERROR] No se encontró el slider de volumen");
            return;
        }
        volumenSlider.value = config.volumen.toString();
        updateVolumeText(config.volumen);
        // Aplicar modo oscuro
        const darkModeCheckbox = document.getElementById('dark-mode');
        if (config.darkMode) {
            document.body.classList.add('dark-mode');
            darkModeCheckbox.checked = true;
        }
        else {
            document.body.classList.remove('dark-mode');
            darkModeCheckbox.checked = false;
        }
        // Aplicar configuración del compresor
        const compresorActivoCheckbox = document.getElementById('compresor-activo');
        const thresholdSlider = document.getElementById('threshold');
        const ratioSlider = document.getElementById('ratio');
        const kneeSlider = document.getElementById('knee');
        const attackSlider = document.getElementById('attack');
        const releaseSlider = document.getElementById('release');
        compresorActivoCheckbox.checked = config.compresor.activo;
        setCompresorActivo(config.compresor.activo);
        thresholdSlider.value = config.compresor.threshold.toString();
        compresorParams.threshold = config.compresor.threshold;
        actualizarValorCompresor('threshold', config.compresor.threshold);
        ratioSlider.value = config.compresor.ratio.toString();
        compresorParams.ratio = config.compresor.ratio;
        actualizarValorCompresor('ratio', config.compresor.ratio);
        kneeSlider.value = config.compresor.knee.toString();
        compresorParams.knee = config.compresor.knee;
        actualizarValorCompresor('knee', config.compresor.knee);
        attackSlider.value = config.compresor.attack.toString();
        compresorParams.attack = config.compresor.attack;
        actualizarValorCompresor('attack', config.compresor.attack);
        releaseSlider.value = config.compresor.release.toString();
        compresorParams.release = config.compresor.release;
        actualizarValorCompresor('release', config.compresor.release);
        // Limpiar filtros dinámicos actuales
        const filtrosContainer = document.getElementById('filtros-container');
        if (!filtrosContainer) {
            console.error("[ERROR] No se encontró el contenedor de filtros dinámicos");
            return;
        }
        filtrosContainer.innerHTML = '';
        // Importar la función necesaria para crear filtros
        try {
            if (config.filtrosDinamicos && config.filtrosDinamicos.length > 0) {
                // Guardar los filtros en el storage local para que cargarFiltros los encuentre
                chrome.storage.local.set({ filtrosDinamicos: config.filtrosDinamicos }, () => __awaiter(this, void 0, void 0, function* () {
                    // Importar el módulo y llamar a cargarFiltros
                    const filtersModule = yield import('./filters_interface.js');
                    filtersModule.cargarFiltros();
                    // Enviar configuración al offscreen si está capturando audio
                    if (localEstado.capturingAudio) {
                        yield enviarConfiguracionAlOffscreen(config);
                    }
                }));
            }
            else {
                // Si no hay filtros, solo enviar la configuración del compresor y volumen
                if (localEstado.capturingAudio) {
                    yield enviarConfiguracionAlOffscreen(config);
                }
            }
        }
        catch (error) {
            console.error("Error al cargar los filtros:", error);
        }
        // Guardar el estado actualizado
        guardarEstado();
    });
}
// Actualizar el texto del valor de volumen en dB
export function updateVolumeText(dbValue) {
    const volumeValueElement = document.getElementById("volumen-value");
    if (volumeValueElement) {
        volumeValueElement.textContent = `${dbValue} dB`;
    }
}
// Función para obtener la configuración actual
export function obtenerConfiguracionActual() {
    let confInterface = {
        volumen: 0,
        filtrosDinamicos: [],
        compresor: {
            activo: false,
            threshold: 0,
            ratio: 1,
            knee: 0,
            attack: 0.1,
            release: 0.1
        },
        darkMode: false
    };
    // Obtener valores de volumen
    const volumenSlider = document.getElementById('volumen');
    if (!volumenSlider) {
        console.error("[ERROR] No se encontró el slider de volumen");
        return confInterface;
    }
    else
        confInterface.volumen = parseFloat(volumenSlider.value);
    // Obtener valores de filtros dinámicos
    const filtrosContainer = document.getElementById('filtros-container');
    if (!filtrosContainer) {
        console.error("[ERROR] No se encontró el contenedor de filtros dinámicos");
        return confInterface;
    }
    const filtrosElements = filtrosContainer.querySelectorAll('.filtro-dinamico');
    const filtrosDinamicos = [];
    filtrosElements.forEach(filtroElement => {
        if (!(filtroElement instanceof HTMLElement)) {
            console.error("[ERROR] Elemento de filtro no es un HTMLElement");
            return;
        }
        const frecuenciaInput = filtroElement.querySelector('.frecuencia');
        const qInput = filtroElement.querySelector('.q');
        const gananciaInput = filtroElement.querySelector('.ganancia');
        const bypassInput = filtroElement.querySelector('.bypass');
        const fd = {
            id: filtroElement.dataset.id || '',
            frecuencia: parseFloat(frecuenciaInput.value),
            q: parseFloat(qInput.value),
            ganancia: parseFloat(gananciaInput.value),
            bypass: bypassInput.checked
        };
        filtrosDinamicos.push(fd);
    });
    // Obtener configuración del compresor
    const compresorCheckbox = document.getElementById('compresor-activo');
    const compresorActivo = compresorCheckbox.checked;
    const thresholdInput = document.getElementById('threshold');
    const ratioInput = document.getElementById('ratio');
    const kneeInput = document.getElementById('knee');
    const attackInput = document.getElementById('attack');
    const releaseInput = document.getElementById('release');
    confInterface = {
        volumen: parseFloat(volumenSlider.value),
        filtrosDinamicos,
        compresor: {
            activo: compresorActivo,
            threshold: parseFloat(thresholdInput.value),
            ratio: parseFloat(ratioInput.value),
            knee: parseFloat(kneeInput.value),
            attack: parseFloat(attackInput.value),
            release: parseFloat(releaseInput.value)
        },
        darkMode: document.body.classList.contains('dark-mode')
    };
    return confInterface;
}
