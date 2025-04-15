import { cargarFiltros } from "./filters_handling.js";

let capturingAudio = false;
let offscreenPort = null;
let loops = null;
let boton = null;
const filters = ["sub", "bass", "lowMid", "mid", "highMid", "high", "air"];
const staticFiltering = false;
let debug_counter = 1;
let activeFrequencyMarker = null;
let activeQMarker = null;
const volumen_normalizer = 70;

// 🧠 Guardar y restaurar estado de los 8 sliders + estado de audio

function guardarEstado() {
  const keys = ["volumen"];
  if (staticFiltering) keys.push(...filters);
  const estado = { capturingAudio: capturingAudio };
  keys.forEach((key) => {
    estado[key] = parseFloat(document.getElementById(key)?.value);
  });
  chrome.storage.local.set(estado);
}

chrome.storage.local.get(["volumen", ...filters, "capturingAudio"], (data) => {
  Object.entries(data).forEach(([key, value]) => {
    const el = document.getElementById(key);
    if (el) el.value = value;
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
        alert("[popup] No se puede capturar esta pestaña. Abrí una página web con audio 😊");
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
        level: parseFloat(document.getElementById("volumen").value) / volumen_normalizer,
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
});

export async function getActiveTabId() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab.id;
}

function drawVisualizer(data) {
  const preData = data["pre"];
  const postData = data["post"];
  const canvas = document.getElementById("visual");
  const ctx = canvas.getContext("2d");
  const bufferLength = preData.length;

  // 🌞 Fondo claro y limpio
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fefefe"; // blanco suave
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const barWidth = (canvas.width / bufferLength) * 0.9;
  let x = 0;

  // ✨ Efecto glow
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  // 💜 Pre-EQ: violeta vivo con glow
  ctx.shadowColor = "rgba(190, 90, 255, 0.6)";
  for (let i = 0; i < bufferLength; i++) {
    const barHeight = preData[i];
    ctx.fillStyle = "rgba(190, 90, 255, 0.5)";
    ctx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);
    x += barWidth + 1;
  }

  // 💚 Post-EQ: verde neón claro con glow
  ctx.shadowColor = "rgba(50, 220, 120, 0.6)";
  x = 0;
  for (let i = 0; i < bufferLength; i++) {
    const barHeight = postData[i];
    ctx.fillStyle = "rgba(50, 220, 120, 0.6)";
    ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
    x += barWidth + 1;
  }

  // 🧽 Limpiar efectos
  ctx.shadowBlur = 0;
  ctx.shadowColor = "transparent";

  // 🔀 Lneas verticales en 60, 1000, 8000 Hz
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#666";
  ctx.beginPath();
  [60, 1000, 8000].forEach((freq) => {
    const x = canvas.width * freq / 10000;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
  });
  ctx.stroke();

  // Dibujar el marcador de frecuencia activa si existe
  if (activeFrequencyMarker) {
    const x = canvas.width * activeFrequencyMarker / 20000; // Normalizar a 20kHz
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#ff3366"; // Color llamativo para el marcador
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
    
    // Etiqueta con el valor de frecuencia
    ctx.fillStyle = "#ff3366";
    ctx.font = "12px Arial";
    ctx.fillText(`${activeFrequencyMarker} Hz`, x + 5, 15);
    
    // 🔔 Dibujar la campana de Q si tenemos tanto frecuencia como Q
    if (activeQMarker) {
      // Dibujar la campana
      ctx.beginPath();
      ctx.strokeStyle = "rgba(255, 51, 102, 0.7)";
      ctx.fillStyle = "rgba(255, 51, 102, 0.2)";
      
      // Calcular la escala de la campana basada en Q
      // Cuanto mayor sea Q, más estrecha será la campana
      const qScale = Math.max(20, 200 / activeQMarker); // Limitar el mínimo para Q muy altos
      
      // Dibujar la curva de campana
      ctx.beginPath();
      
      // Puntos para la curva
      const points = [];
      const centerX = x;
      const height = canvas.height * 0.7; // Altura máxima de la campana
      
      // Generar puntos para la curva de campana
      for (let i = -canvas.width/2; i <= canvas.width/2; i += 5) {
        const pointX = centerX + i;
        if (pointX >= 0 && pointX <= canvas.width) {
          // Fórmula de campana gaussiana
          const pointY = canvas.height - height * Math.exp(-(i * i) / (2 * qScale * qScale));
          points.push({x: pointX, y: pointY});
        }
      }
      
      // Dibujar la curva
      if (points.length > 0) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.stroke();
        
        // Rellenar el área bajo la curva
        ctx.lineTo(points[points.length-1].x, canvas.height);
        ctx.lineTo(points[0].x, canvas.height);
        ctx.closePath();
        ctx.fill();
        
        // Mostrar el valor de Q
        ctx.fillStyle = "#ff3366";
        ctx.fillText(`Q: ${activeQMarker.toFixed(1)}`, x + 5, 30);
      }
    }
  }
}

export function updateFrequencyMarker(frequency) {
  activeFrequencyMarker = frequency;
}

export function updateQMarker(q) {
  activeQMarker = q;
}

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "visualizer-data" && msg.data) {
    drawVisualizer(msg.data);
  }
});

// Agregar evento para el slider de volumen
document.getElementById("volumen").addEventListener("input", async (e) => {
  const tabId = await getActiveTabId();
  const volumenValue = parseFloat(e.target.value);
  
  // Enviar el mensaje para ajustar el volumen
  chrome.runtime.sendMessage({
    type: "ajustar-volumen",
    target: "offscreen",
    tabId,
    level: volumenValue / volumen_normalizer, // Normalizar a un valor entre 0 y 1
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