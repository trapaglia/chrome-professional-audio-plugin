import { cargarFiltros, actualizarEstiloFiltros } from "./filters_interface.ts";
import { drawVisualizer } from "./visualizer.ts";
import { staticFiltering, filters } from "./config.ts";
import { inicializarCompresor } from "./compressor.ts";
import { localEstado } from "./state_memory.ts"
import { guardarEstado, cargarEstado, clearStorage, saveValue } from "./state_memory.ts";
import { updateVolumeText } from "./interface.ts";
import { dbToGain } from "./utils.ts";
import { inicializarPresets } from "./events.ts";

let offscreenPort: chrome.runtime.Port | null = null;
let loops: number | null = null;
let debug_counter: number = 1;
let debugLabel: HTMLElement | null = null;

type Message = {
  type: string;
  target: string;
  tabId?: number;
  streamId?: string;
  level?: number;
  banda?: string;
  valor?: number;
  params?: {
    threshold?: number;
    ratio?: number;
    knee?: number;
    attack?: number;
    release?: number;
  };
  isFirstOpen?: boolean;
}

// Sender
function sendMessagePromise(message: Message) {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage(message, response => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(response);
            }
        });
    }) as Promise<Message>; // | undefined>;
}

function getElement(id: string): HTMLElement | null {
  const element = document.getElementById(id);
  if (!element) {
    console.error(`[popup] Elemento '${id}' no encontrado`);
    return null;
  }
  return element;
}

// Wait for zhe DOM to load
document.addEventListener('DOMContentLoaded', async () => {
  const botonCaptura = getElement("activar");
  if (!botonCaptura) {
    console.error("[popup] Elemento 'activar' no encontrado");
    return;
  }
  debugLabel = getElement("estado") as HTMLElement;
  const debugButton = getElement("debug");
  if (!debugLabel || !debugButton) {
    console.error("[popup] Elemento 'estado' o 'debug' no encontrado");
    return;
  }
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
    const response : { isFirstOpen: boolean } = await sendMessagePromise({
      type: "check-first-popup-open",
      target: "background"
    }) as { isFirstOpen: boolean };
    
    if (response && response.isFirstOpen) {
      await clearStorage();
    }
  } catch (error) {
    console.error("[ERROR] Error al verificar primera apertura:", error);
  }

  cargarFiltros();

  chrome.runtime.sendMessage({ type: "offscreen-wakeup", target: "background" });

  if (localEstado.capturingAudio) {
    botonCaptura.textContent = "Detener Audio";
    await openOffscreenPort();
  } else {
    botonCaptura.textContent = "Activar Audio";
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
    (debugLabel as HTMLElement).textContent = "Debugging...";
    chrome.runtime.sendMessage({ type: "debug" , tabId: await getActiveTabId()});
  });

  botonCaptura.addEventListener("click", async () => {
    const tabId = await getActiveTabId();

    if (!localEstado.capturingAudio) {
      const activeTabs : chrome.tabs.Tab[] = await chrome.tabs.query({ active: true, currentWindow: true });
      const tab: chrome.tabs.Tab | undefined = activeTabs[0];
      if (!tab) {
        console.error("[popup] No se encontró la pestaña activa");
        return;
      }
      console.log("entre isActive")
      if (!tab.url || !tab.url.startsWith("http")) {
        console.log("ALERT")
        alert("[popup] No se puede capturar esta pestaña. Abrí una página web con audio ");
        return;
      }
      
      // Usar Promise para manejar el callback de getMediaStreamId
      const streamId = await new Promise<string>((resolve) => {
        chrome.tabCapture.getMediaStreamId({ targetTabId: tabId }, (streamId) => {
          if (chrome.runtime.lastError) {
            console.error("[popup] Error al capturar la pestaña:", chrome.runtime.lastError);
            return;
          }
          resolve(streamId);
        });
      });
      
      // Define the type for eqValores to allow string indexing
      const eqValores: { [key: string]: number } = {}
      if (staticFiltering) {
        filters.forEach((filter) => {
          eqValores[filter] = parseFloat((document.getElementById(filter) as HTMLInputElement).value);
        });
      }
      await chrome.runtime.sendMessage({
        type: "start-processing",
        target: "offscreen",
        tabId,
        streamId,
        level: dbToGain(parseFloat((document.getElementById("volumen") as HTMLInputElement).value)),
        ...eqValores,
      });
      botonCaptura.textContent = "Detener Audio ";
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
      (debugLabel as HTMLElement).textContent = "Deteniendo audio..." + debug_counter++;
      await chrome.runtime.sendMessage({
        type: "stop-processing",
        target: "offscreen",
        tabId,
      });
      botonCaptura.textContent = "Activar Audio";
      if (loops !== null) {
        cancelAnimationFrame(loops);
        loops = null;
      }
      saveValue("capturingAudio", false);
    }

    guardarEstado();
  });

  // Agregar evento para el checkbox de modo oscuro
  const darkModeCheckbox = getElement("dark-mode");
  if (darkModeCheckbox) {
    darkModeCheckbox.addEventListener("change", (e: Event) => {
      if (!e.target)
        alert("[popup] Elemento 'dark-mode' no encontrado");
      else if ((e.target as HTMLInputElement).checked) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    
      // Actualizar estilos de los filtros cuando cambie el tema
      actualizarEstiloFiltros();
    
      guardarEstado();
    });
  }

  // Inicializar el texto del volumen
  const volumenSlider : HTMLInputElement | null = getElement("volumen") as HTMLInputElement | null;
  if (volumenSlider) {
    updateVolumeText(parseFloat(volumenSlider.value));
  }

  // Agregar evento para el slider de volumen
  if (volumenSlider) {
    volumenSlider.addEventListener("input", async (e) => {
      const tabId = await getActiveTabId();
      if (!e.target)
        alert("[popup] Elemento 'volumen' no encontrado");
      const volumenValue = parseFloat((e.target as HTMLInputElement).value);
      
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
  }

  if (staticFiltering) {
    filters.forEach((id) => {
      const filterSlider = getElement(id) as HTMLInputElement | null;
      if (filterSlider) {
        filterSlider.addEventListener("input", async (e) => {
          if (!e.target)
            alert("[popup] Elemento '" + id + "' no encontrado");
          const tabId = await getActiveTabId();
          chrome.runtime.sendMessage({
          type: "ajustar-filtro",
          target: "offscreen",
          tabId,
          banda: id,
          valor: parseFloat((e.target as HTMLInputElement).value),
          });
        guardarEstado();
        });
      }
    });
  }
  // Inicializar controles del compresor
  inicializarCompresor();
});

window.getActiveTabId = async function () : Promise<number> {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab || !tab.id) 
    throw new Error("No active tab found");
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
      (debugLabel as HTMLElement).textContent = "no hay puerto offscreen";
    }
    const id = requestAnimationFrame(loop);
    loops = id;
  }
  loop();
}

async function openOffscreenPort () : Promise<void> {
  try {
    const tabId = await getActiveTabId();
    offscreenPort = chrome.runtime.connect({ name: "popup-visualizer"});
    (debugLabel as HTMLElement).textContent = "Conectado al offscreen";
    offscreenPort.postMessage({ type: "start-stream", tabId });

    offscreenPort.onDisconnect.addListener(() => {
      (debugLabel as HTMLElement).textContent = "Desconectado del offscreen";
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
    (debugLabel as HTMLElement).textContent = "Error al conectar al offscreen";
    console.error("[POPUP] Error al conectar al offscreen:", error);
  }
}

inicializarPresets();
// inicializarEventos();