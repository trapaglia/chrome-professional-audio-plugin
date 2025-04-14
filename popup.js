let capturingAudio = false;
let offscreenPort = null;
let loops = null;
let boton = null;
const filters = ["sub", "bass", "lowMid", "mid", "highMid", "high", "air"];
const staticFiltering = false;
let debug_counter = 1;

// 🧠 Guardar y restaurar estado de los 8 sliders + estado de audio

function guardarEstado() {
  const keys = ["volumen", ...filters];
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

  chrome.runtime.sendMessage({ type: "offscreen-wakeup", target: "background" });

  chrome.storage.local.get(['capturingAudio'], function(result) {
    capturingAudio = result.capturingAudio || false;

    if (capturingAudio) {
      boton.textContent = "Detener Audio 🔇";
      openOffscreenPort();
      // updateVisualizer();
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
        level: parseFloat(document.getElementById("volumen").value),
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

}

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "visualizer-data" && msg.data) {
    drawVisualizer(msg.data);
  }
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


function updateVisualizer() {
  function loop() {
    if (offscreenPort) {
      offscreenPort.postMessage({
        type: "give-me-viz",
        target: "offscreen",
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