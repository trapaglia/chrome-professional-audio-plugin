import { cargarFiltros } from "./filters_interface.js";
import { drawVisualizer } from "./visualizer.js";

let capturingAudio = false;
let offscreenPort = null;
let loops = null;
let boton = null;
const filters = ["sub", "bass", "lowMid", "mid", "highMid", "high", "air"];
const staticFiltering = false;
let debug_counter = 1;
let activeQMarker = null;
let compresorActivo = false;
let compresorParams = {
  threshold: -24,
  ratio: 4,
  knee: 30,
  attack: 0.003,
  release: 0.25
};

// Guardar y restaurar estado de los 8 sliders + estado de audio
function guardarEstado() {
  const keys = ["volumen"];
  if (staticFiltering) keys.push(...filters);
  const estado = { 
    capturingAudio: capturingAudio,
    darkMode: document.body.classList.contains('dark-mode'),
    compresor: {
      activo: document.getElementById('compresor-activo').checked,
      threshold: parseFloat(document.getElementById('threshold').value),
      ratio: parseFloat(document.getElementById('ratio').value),
      knee: parseFloat(document.getElementById('knee').value),
      attack: parseFloat(document.getElementById('attack').value),
      release: parseFloat(document.getElementById('release').value)
    }
  };
  keys.forEach((key) => {
    estado[key] = parseFloat(document.getElementById(key)?.value);
  });
  chrome.storage.local.set(estado);
}

chrome.storage.local.get(["volumen", ...filters, "capturingAudio", "darkMode"], (data) => {
  Object.entries(data).forEach(([key, value]) => {
    if (key === "darkMode") {
      if (value) {
        document.body.classList.add('dark-mode');
        document.getElementById('dark-mode').checked = true;
      }
    } else {
      const el = document.getElementById(key);
      if (el) el.value = value;
    }
  });

  if (data.capturingAudio) {
    capturingAudio = true;
    if (boton==null) boton = document.getElementById("activar");
    boton.textContent = "Detener Audio 🔇";
  }
});

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
  boton = document.getElementById("activar");
  const estado = document.getElementById("estado");
  const debug = document.getElementById("debug");

  // Inicializar los botones de presets
  inicializarPresets();

  // Verificar si es la primera vez que se abre el popup desde la inicialización
  try {
    const response = await sendMessagePromise({
      type: "check-first-popup-open",
      target: "background"
    });
    
    if (response && response.isFirstOpen) {
      console.log("[INFO] Primera apertura del popup desde la inicialización - Limpiando storage");
      // Limpiar todas las variables guardadas
      await chrome.storage.local.clear();
      // Guardar que el audio está desactivado
      chrome.storage.local.set({ capturingAudio: false });
    }
  } catch (error) {
    console.error("[ERROR] Error al verificar primera apertura:", error);
  }

  cargarFiltros();

  chrome.runtime.sendMessage({ type: "offscreen-wakeup", target: "background" });

  chrome.storage.local.get(['capturingAudio'], function(result) {
    capturingAudio = result.capturingAudio || false;

    if (capturingAudio) {
      boton.textContent = "Detener Audio 🔇";
      openOffscreenPort();
    } else {
      boton.textContent = "Activar Audio 🎤";
    }
  });

  chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    // conexion P2P
    if (message.type === "offscreen-alive") {
      if (!offscreenPort) {
        await openOffscreenPort();
      }
    }
  });

  debug.addEventListener("click", async () => {
    console.log("Debug button clicked");
    chrome.runtime.sendMessage({ type: "debug" , tabId: await getActiveTabId()});
  });

  boton.addEventListener("click", async () => {
    const tabId = await getActiveTabId();

    if (!capturingAudio) {
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
      boton.textContent = "Detener Audio 🔇";
      capturingAudio = true;
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
      estado.textContent = "Deteniendo audio..." + debug_counter++;
      await chrome.runtime.sendMessage({
        type: "stop-processing",
        target: "offscreen",
        tabId,
      });
      boton.textContent = "Activar Audio 🎤";
      capturingAudio = false;
      cancelAnimationFrame(loops);
      loops = null;
    }

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
  inicializarCompresor();
  
  // Cargar el estado guardado
  cargarEstado();
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

// Función para cargar la lista de presets en el selector
function cargarListaPresets() {
  const presetSelect = document.getElementById('preset-select');
  
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
        if (capturingAudio) {
          enviarConfiguracionAlOffscreen(config);
        }
      });
    } else {
      // Si no hay filtros, solo enviar la configuración del compresor y volumen
      if (capturingAudio) {
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

// Función para inicializar los controles del compresor
function inicializarCompresor() {
  const compresorActivoCheckbox = document.getElementById('compresor-activo');
  const threshold = document.getElementById('threshold');
  const ratio = document.getElementById('ratio');
  const knee = document.getElementById('knee');
  const attack = document.getElementById('attack');
  const release = document.getElementById('release');
  
  // Actualizar valores mostrados
  actualizarValorCompresor('threshold', threshold.value);
  actualizarValorCompresor('ratio', ratio.value);
  actualizarValorCompresor('knee', knee.value);
  actualizarValorCompresor('attack', attack.value);
  actualizarValorCompresor('release', release.value);
  
  // Event listeners para cambios en los controles
  compresorActivoCheckbox.addEventListener('change', async function() {
    compresorActivo = this.checked;
    await enviarConfiguracionCompresor();
    guardarEstado();
  });
  
  threshold.addEventListener('input', async function() {
    actualizarValorCompresor('threshold', this.value);
    compresorParams.threshold = parseFloat(this.value);
    await enviarConfiguracionCompresor();
    guardarEstado();
  });
  
  ratio.addEventListener('input', async function() {
    actualizarValorCompresor('ratio', this.value);
    compresorParams.ratio = parseFloat(this.value);
    await enviarConfiguracionCompresor();
    guardarEstado();
  });
  
  knee.addEventListener('input', async function() {
    actualizarValorCompresor('knee', this.value);
    compresorParams.knee = parseFloat(this.value);
    await enviarConfiguracionCompresor();
    guardarEstado();
  });
  
  attack.addEventListener('input', async function() {
    actualizarValorCompresor('attack', this.value);
    compresorParams.attack = parseFloat(this.value);
    await enviarConfiguracionCompresor();
    guardarEstado();
  });
  
  release.addEventListener('input', async function() {
    actualizarValorCompresor('release', this.value);
    compresorParams.release = parseFloat(this.value);
    await enviarConfiguracionCompresor();
    guardarEstado();
  });
}

// Función para actualizar los valores mostrados del compresor
function actualizarValorCompresor(tipo, valor) {
  const valorElement = document.getElementById(`${tipo}-value`);
  
  switch(tipo) {
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
      const attackMs = (parseFloat(valor) * 1000).toFixed(0);
      valorElement.textContent = `${attackMs} ms`;
      break;
    case 'release':
      // Convertir a milisegundos para mejor legibilidad
      const releaseMs = (parseFloat(valor) * 1000).toFixed(0);
      valorElement.textContent = `${releaseMs} ms`;
      break;
  }
}

// Función para enviar la configuración del compresor al script offscreen
async function enviarConfiguracionCompresor() {
  if (capturingAudio) {
    const tabId = await getActiveTabId();
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
}

// Función para cargar el estado guardado
function cargarEstado() {
  chrome.storage.local.get("estado", function(data) {
    if (data.estado) {
      const estado = data.estado;
      
      // Cargar volumen
      if (estado.volumen !== undefined) {
        document.getElementById("volumen").value = estado.volumen;
        document.getElementById("volumen-value").textContent = `${estado.volumen} dB`;
      }
      
      // Cargar modo oscuro
      if (estado.darkMode !== undefined) {
        if (estado.darkMode) {
          document.body.classList.add('dark-mode');
          document.getElementById('dark-mode').checked = true;
        } else {
          document.body.classList.remove('dark-mode');
          document.getElementById('dark-mode').checked = false;
        }
      }
      
      // Cargar configuración del compresor
      if (estado.compresor) {
        document.getElementById('compresor-activo').checked = estado.compresor.activo;
        compresorActivo = estado.compresor.activo;
        
        if (estado.compresor.threshold !== undefined) {
          document.getElementById('threshold').value = estado.compresor.threshold;
          compresorParams.threshold = estado.compresor.threshold;
          actualizarValorCompresor('threshold', estado.compresor.threshold);
        }
        
        if (estado.compresor.ratio !== undefined) {
          document.getElementById('ratio').value = estado.compresor.ratio;
          compresorParams.ratio = estado.compresor.ratio;
          actualizarValorCompresor('ratio', estado.compresor.ratio);
        }
        
        if (estado.compresor.knee !== undefined) {
          document.getElementById('knee').value = estado.compresor.knee;
          compresorParams.knee = estado.compresor.knee;
          actualizarValorCompresor('knee', estado.compresor.knee);
        }
        
        if (estado.compresor.attack !== undefined) {
          document.getElementById('attack').value = estado.compresor.attack;
          compresorParams.attack = estado.compresor.attack;
          actualizarValorCompresor('attack', estado.compresor.attack);
        }
        
        if (estado.compresor.release !== undefined) {
          document.getElementById('release').value = estado.compresor.release;
          compresorParams.release = estado.compresor.release;
          actualizarValorCompresor('release', estado.compresor.release);
        }
      }
    }
  });
}