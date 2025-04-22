import { cargarFiltros } from "./filters_interface.js";
import { drawVisualizer } from "./visualizer.js";
import { staticFiltering, filters } from "./config.js";
import { inicializarCompresor } from "./compressor.js";
import { localEstado } from "./state_memory.js"
import { guardarEstado, cargarEstado, cargarListaPresets, clearStorage, saveValue } from "./state_memory.js";

let offscreenPort = null;
let loops = null;
let debug_counter = 1;


// Sender
function sendMessagePromise(message) {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage(message, response => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(response);
            }
        });
    });
}

// Wait for zhe DOM to load
document.addEventListener('DOMContentLoaded', async () => {
  const botonCaptura = document.getElementById("activar");
  const debugLabel = document.getElementById("estado");
  const debugButton = document.getElementById("debug");
  debugLabel.textContent = "Cargando...";

  // Inicializar los botones de presets
  // inicializarPresets();
  // Cargar estado guardado
  cargarEstado();
  debugLabel.textContent = "estado Cargado";

  // Verificar si es la primera vez que se abre el popup desde la inicialización
  try {
    const response = await sendMessagePromise({
      type: "check-first-popup-open",
      target: "background"
    });
    
    if (response && response.isFirstOpen) {
      await clearStorage();
    }
  } catch (error) {
    console.error("[ERROR] Error al verificar primera apertura:", error);
  }

  cargarFiltros();

  chrome.runtime.sendMessage({ type: "offscreen-wakeup", target: "background" });

  if (localEstado.capturingAudio) {
    botonCaptura.textContent = "Detener Audio 🔇";
    openOffscreenPort();
  } else {
    botonCaptura.textContent = "Activar Audio 🎤";
  }

  chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    // conexion P2P
    if (message.type === "offscreen-alive") {
      if (!offscreenPort) {
        await openOffscreenPort();
      }
    }
  });

  debugButton.addEventListener("click", async () => {
    console.log("Debug button clicked");
    debugLabel.textContent = "Debugging...";
    chrome.runtime.sendMessage({ type: "debug" , tabId: await getActiveTabId()});
  });

  botonCaptura.addEventListener("click", async () => {
    const tabId = await getActiveTabId();

    if (!localEstado.capturingAudio) {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

      console.log("entre isActive")
      if (!tab.url.startsWith("http")) {
        console.log("ALERT")
        alert("[popup] No se puede capturar esta pestaña. Abrí una página web con audio ");
        return;
      }
      const streamId = await chrome.tabCapture.getMediaStreamId({ targetTabId: tabId });
      const eqValores = {}
      if (staticFiltering) {
        filters.forEach((filter) => {
          eqValores[filter] = parseFloat(document.getElementById(filter).value);
        });
      }
      await chrome.runtime.sendMessage({
        type: "start-processing",
        target: "offscreen",
        tabId,
        streamId,
        level: dbToGain(parseFloat(document.getElementById("volumen").value)),
        ...eqValores,
      });
      botonCaptura.textContent = "Detener Audio 🔇";
      saveValue("capturingAudio", true);
      if (offscreenPort) {
        offscreenPort.postMessage({ type: "start-stream", tabId });
      } else {
        await openOffscreenPort();
        console.log("[WARNING] Opened offscreen port because it was closed");
      }
    } else {
      if (!offscreenPort) {
        console.log("[WARNING] No hay puerto offscreen");
        return;
      }
      debugLabel.textContent = "Deteniendo audio..." + debug_counter++;
      await chrome.runtime.sendMessage({
        type: "stop-processing",
        target: "offscreen",
        tabId,
      });
      botonCaptura.textContent = "Activar Audio 🎤";
      cancelAnimationFrame(loops);
      loops = null;
      saveValue("capturingAudio", false);
    }
    debugLabel.textContent = "Estado guardado, capturingAudio: " + localEstado.capturingAudio;
    guardarEstado();
  });

  // Agregar evento para el checkbox de modo oscuro
  document.getElementById("dark-mode").addEventListener("change", (e) => {
    if (e.target.checked) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    guardarEstado();
  });

  // Inicializar el texto del volumen
  const volumenSlider = document.getElementById("volumen");
  if (volumenSlider) {
    updateVolumeText(volumenSlider.value);
  }

  // Agregar evento para el slider de volumen
  document.getElementById("volumen").addEventListener("input", async (e) => {
    const tabId = await getActiveTabId();
    const volumenValue = parseFloat(e.target.value);
    
    // Actualizar el texto que muestra el valor en dB
    updateVolumeText(volumenValue);
    
    // Enviar el mensaje para ajustar el volumen
    chrome.runtime.sendMessage({
      type: "ajustar-volumen",
      target: "offscreen",
      tabId,
      level: dbToGain(volumenValue), // Convertir dB a ganancia
    });
    
    // Guardar el estado del volumen
    guardarEstado();
  });

  filters.forEach((id) => {
    document.getElementById(id)?.addEventListener("input", async (e) => {
      const tabId = await getActiveTabId();
      chrome.runtime.sendMessage({
        type: "ajustar-filtro",
        target: "offscreen",
        tabId,
        banda: id,
        valor: parseFloat(e.target.value),
      });
      guardarEstado();
    });
  });

  // Inicializar controles del compresor
  // inicializarCompresor();
  
  // Cargar el estado guardado
  // cargarEstado();
});

window.getActiveTabId = async function () {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab.id;
};
// export async function getActiveTabId() {
//   const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//   return tab.id;
// }

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "visualizer-data" && msg.data) {
    drawVisualizer(msg.data);
  }
});

// Función para convertir dB a valor de ganancia para Web Audio API
function dbToGain(db) {
  return Math.pow(10, db / 20);
}

// Actualizar el texto del valor de volumen en dB
function updateVolumeText(dbValue) {
  const volumeValueElement = document.getElementById("volumen-value");
  if (volumeValueElement) {
    volumeValueElement.textContent = `${dbValue} dB`;
  }
}

async function updateVisualizer() {
  async function loop() {
    if (offscreenPort) {
      offscreenPort.postMessage({
        type: "give-me-viz",
        target: "offscreen",
        tabId: await getActiveTabId(),
      });
    } else {
      console.assert(false, "[popup] No hay puerto offscreen");
      alert("[popup] No hay puerto offscreen");
      estado.textContent = "no hay puerto offscreen";
    }
    const id = requestAnimationFrame(loop);
    loops = id;
  }
  loop();
}

async function openOffscreenPort () {
  try {
    const tabId = await getActiveTabId();
    offscreenPort = chrome.runtime.connect({ name: "popup-visualizer"});
    estado.textContent = "Conectado al offscreen";
    offscreenPort.postMessage({ type: "start-stream", tabId });

    offscreenPort.onDisconnect.addListener(() => {
      estado.textContent = "Desconectado del offscreen";
    });

    offscreenPort.onMessage.addListener((message) => {
      if (message.type === "visualizer-data") {
        drawVisualizer(message.data);
      } 
      else if (message.type === "start-stream") {
        updateVisualizer();
      }
    });
  } catch (error) {
    estado.textContent = "Error al conectar al offscreen";
    console.error("[POPUP] Error al conectar al offscreen:", error);
  }
}

// Función para inicializar los controles de presets
function inicializarPresets() {
  const guardarPresetBtn = document.getElementById('guardar-preset');
  const cargarPresetBtn = document.getElementById('cargar-preset');
  const eliminarPresetBtn = document.getElementById('eliminar-preset');
  const presetNameInput = document.getElementById('preset-name');
  const presetSelect = document.getElementById('preset-select');

  // Cargar presets existentes
  cargarListaPresets();

  // Evento para guardar preset
  guardarPresetBtn.addEventListener('click', () => {
    const nombrePreset = presetNameInput.value.trim();
    if (nombrePreset === '') {
      alert('Por favor, ingresa un nombre para el preset');
      return;
    }

    // Obtener configuración actual
    const configuracion = obtenerConfiguracionActual();
    
    // Guardar en storage
    chrome.storage.local.get(['presets'], (result) => {
      const presets = result.presets || {};
      presets[nombrePreset] = configuracion;
      
      chrome.storage.local.set({ presets }, () => {
        alert(`Preset "${nombrePreset}" guardado correctamente`);
        presetNameInput.value = '';
        cargarListaPresets();
      });
    });
  });

  // Evento para cargar preset
  cargarPresetBtn.addEventListener('click', () => {
    const nombrePreset = presetSelect.value;
    if (nombrePreset === '') {
      alert('Por favor, selecciona un preset para cargar');
      return;
    }

    chrome.storage.local.get(['presets'], (result) => {
      const presets = result.presets || {};
      const configuracion = presets[nombrePreset];
      
      if (configuracion) {
        aplicarConfiguracion(configuracion);
        console.log("Preset cargado:", configuracion);
        alert(`Preset "${nombrePreset}" cargado correctamente`);
      } else {
        alert(`Error: No se encontró el preset "${nombrePreset}"`);
      }
    });
  });

  // Evento para eliminar preset
  eliminarPresetBtn.addEventListener('click', () => {
    const nombrePreset = presetSelect.value;
    if (nombrePreset === '') {
      alert('Por favor, selecciona un preset para eliminar');
      return;
    }

    if (confirm(`¿Estás seguro de que deseas eliminar el preset "${nombrePreset}"?`)) {
      chrome.storage.local.get(['presets'], (result) => {
        const presets = result.presets || {};
        
        if (presets[nombrePreset]) {
          delete presets[nombrePreset];
          
          chrome.storage.local.set({ presets }, () => {
            alert(`Preset "${nombrePreset}" eliminado correctamente`);
            cargarListaPresets();
          });
        } else {
          alert(`Error: No se encontró el preset "${nombrePreset}"`);
        }
      });
    }
  });
}


// Función para obtener la configuración actual
function obtenerConfiguracionActual() {
  // Obtener valores de volumen
  const volumen = parseFloat(document.getElementById('volumen').value);
  
  // Obtener valores de filtros dinámicos
  const filtrosDinamicos = [];
  const filtrosContainer = document.getElementById('filtros-container');
  const filtrosElements = filtrosContainer.querySelectorAll('.filtro-dinamico');
  
  filtrosElements.forEach(filtroElement => {
    const id = filtroElement.dataset.id;
    const frecuencia = parseFloat(filtroElement.querySelector('.frecuencia').value);
    const q = parseFloat(filtroElement.querySelector('.q').value);
    const ganancia = parseFloat(filtroElement.querySelector('.ganancia').value);
    const bypass = filtroElement.querySelector('.bypass').checked;
    
    filtrosDinamicos.push({
      id,
      frecuencia,
      q,
      ganancia,
      bypass
    });
  });
  
  // Obtener configuración del compresor
  const compresorActivo = document.getElementById('compresor-activo').checked;
  const threshold = parseFloat(document.getElementById('threshold').value);
  const ratio = parseFloat(document.getElementById('ratio').value);
  const knee = parseFloat(document.getElementById('knee').value);
  const attack = parseFloat(document.getElementById('attack').value);
  const release = parseFloat(document.getElementById('release').value);
  
  // Crear objeto de configuración
  return {
    volumen,
    filtrosDinamicos,
    compresor: {
      activo: compresorActivo,
      threshold,
      ratio,
      knee,
      attack,
      release
    },
    darkMode: document.body.classList.contains('dark-mode')
  };
}

// Función para aplicar una configuración cargada
async function aplicarConfiguracion(config) {
  console.log("Aplicando configuración:", config);
  
  // Aplicar volumen
  const volumenSlider = document.getElementById('volumen');
  volumenSlider.value = config.volumen;
  updateVolumeText(config.volumen);
  
  // Aplicar modo oscuro
  const darkModeCheckbox = document.getElementById('dark-mode');
  if (config.darkMode) {
    document.body.classList.add('dark-mode');
    darkModeCheckbox.checked = true;
  } else {
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
  compresorActivo = config.compresor.activo;
  
  thresholdSlider.value = config.compresor.threshold;
  compresorParams.threshold = config.compresor.threshold;
  actualizarValorCompresor('threshold', config.compresor.threshold);
  
  ratioSlider.value = config.compresor.ratio;
  compresorParams.ratio = config.compresor.ratio;
  actualizarValorCompresor('ratio', config.compresor.ratio);
  
  kneeSlider.value = config.compresor.knee;
  compresorParams.knee = config.compresor.knee;
  actualizarValorCompresor('knee', config.compresor.knee);
  
  attackSlider.value = config.compresor.attack;
  compresorParams.attack = config.compresor.attack;
  actualizarValorCompresor('attack', config.compresor.attack);
  
  releaseSlider.value = config.compresor.release;
  compresorParams.release = config.compresor.release;
  actualizarValorCompresor('release', config.compresor.release);
  
  // Limpiar filtros dinámicos actuales
  const filtrosContainer = document.getElementById('filtros-container');
  filtrosContainer.innerHTML = '';
  
  // Importar la función necesaria para crear filtros
  try {
    if (config.filtrosDinamicos && config.filtrosDinamicos.length > 0) {
      // Corregir los nombres de propiedades para que coincidan con lo que espera filters_handling.js
      const filtrosCorregidos = config.filtrosDinamicos.map(filtro => ({
        id: filtro.id,
        freq: filtro.frecuencia || filtro.freq, // Soportar ambos formatos
        q: filtro.q,
        gain: filtro.ganancia || filtro.gain, // Soportar ambos formatos
        bypass: filtro.bypass
      }));
      
      console.log("Filtros corregidos:", filtrosCorregidos);
      
      // Guardar los filtros en el storage local para que cargarFiltros los encuentre
      chrome.storage.local.set({ filtrosDinamicos: filtrosCorregidos }, async () => {
        // Importar el módulo y llamar a cargarFiltros
        const filtersModule = await import('./filters_interface.js');
        filtersModule.cargarFiltros();
        
        // Enviar configuración al offscreen si está capturando audio
        if (localEstado.capturingAudio) {
          enviarConfiguracionAlOffscreen(config);
        }
      });
    } else {
      // Si no hay filtros, solo enviar la configuración del compresor y volumen
      if (localEstado.capturingAudio) {
        enviarConfiguracionAlOffscreen(config);
      }
    }
  } catch (error) {
    console.error("Error al cargar los filtros:", error);
  }
  
  // Guardar el estado actualizado
  guardarEstado();
}

// Función para enviar la configuración al offscreen
async function enviarConfiguracionAlOffscreen(config) {
  const tabId = await getActiveTabId();
  
  // Enviar configuración del volumen
  chrome.runtime.sendMessage({
    type: "ajustar-volumen",
    target: "offscreen",
    tabId,
    level: dbToGain(config.volumen)
  });
  
  // Enviar configuración del compresor
  await enviarConfiguracionCompresor();
}
