import { cargarFiltros, actualizarEstiloFiltros } from "./filters_interface.ts";
import { drawVisualizer } from "./visualizer.ts";
import { staticFiltering, filters } from "./config.ts";
import { inicializarCompresor } from "./compressor.ts";
import { localEstado } from "./state_memory.ts"
import { guardarEstado, cargarEstado, cargarListaPresets, clearStorage, saveValue } from "./state_memory.ts";
import { aplicarConfiguracion, updateVolumeText, obtenerConfiguracionActual } from "./interface.ts";
import { dbToGain } from "./utils.ts";

let offscreenPort = null;
let loops = null;
let debug_counter = 1;


// Sender
function sendMessagePromise(message) {
    console.log("[DEBUG] Enviando mensaje:", message);
    return new Promise((resolve, reject) => {
        try {
            chrome.runtime.sendMessage(message, response => {
                console.log("[DEBUG] Respuesta recibida en sendMessagePromise:", response);
                if (chrome.runtime.lastError) {
                    console.error("[DEBUG] Error en sendMessagePromise:", chrome.runtime.lastError);
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(response);
                }
            });
        } catch (err) {
            console.error("[DEBUG] Error al enviar mensaje:", err);
            reject(err);
        }
    });
}

// Wait for zhe DOM to load
document.addEventListener('DOMContentLoaded', async () => {
  const botonCaptura = document.getElementById("activar");
  const debugLabel = document.getElementById("estado");
  const debugButton = document.getElementById("debug");
  debugLabel.textContent = "Cargando...";

  // Inicializar los botones de presets
  console.log("Inicializando presets...")
  inicializarPresets();
  // Cargar estado guardado
  console.log("Inicializando cargandoEstado...")
  cargarEstado();
  console.log("Estado cargado:", localEstado);
  
  // Verificar si es la primera vez que se abre el popup desde la inicialización
  try {
    console.log("[DEBUG] Verificando primera apertura del popup...");
    
    // En lugar de esperar una respuesta síncrona, enviamos el mensaje
    // y configuramos un listener para la respuesta
    chrome.runtime.sendMessage({
      type: "check-first-popup-open",
      target: "background"
    });
    
    // Escuchamos por un mensaje específico desde el background 
    // (agregaremos este handler en background.ts)
    const handleFirstOpen = (message) => {
      if (message.type === "first-open-response") {
        console.log("[DEBUG] Respuesta de primera apertura recibida:", message);
        
        // Removemos el listener para evitar múltiples respuestas
        chrome.runtime.onMessage.removeListener(handleFirstOpen);
        
        if (message.isFirstOpen) {
          console.log("[DEBUG] Es primera apertura, limpiando storage...");
          clearStorage().then(() => {
            console.log("[DEBUG] Storage limpiado correctamente");
          });
        }
      }
    };
    
    // Agregamos el listener
    chrome.runtime.onMessage.addListener(handleFirstOpen);
    
  } catch (error) {
    console.error("[ERROR] Error al verificar primera apertura:", error);
    console.log("[DEBUG] Tipo de error:", typeof error);
    console.log("[DEBUG] Propiedades del error:", Object.keys(error));
    if (error.message) console.log("[DEBUG] Mensaje de error:", error.message);
    if (error.stack) console.log("[DEBUG] Stack trace:", error.stack);
  }

  console.log("[DEBUG] Cargando filtros...");
  cargarFiltros();

  console.log("[DEBUG] Enviando mensaje offscreen-wakeup...");
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

    guardarEstado();
  });

  // Agregar evento para el checkbox de modo oscuro
  document.getElementById("dark-mode").addEventListener("change", (e) => {
    if (e.target.checked) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    
    // Actualizar estilos de los filtros cuando cambie el tema
    actualizarEstiloFiltros();
    
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
});

window.getActiveTabId = async function () {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab.id;
};

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "visualizer-data" && msg.data) {
    drawVisualizer(msg.data);
  }
});



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
