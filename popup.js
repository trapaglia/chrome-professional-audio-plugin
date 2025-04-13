let capturingAudio = false;
let offscreenPort = null;
let loops = null;

function guardarEstado() {
  chrome.storage.local.set({
    volumen: parseFloat(document.getElementById("volumen").value),
    graves: parseFloat(document.getElementById("graves").value),
    medios: parseFloat(document.getElementById("medios").value),
    agudos: parseFloat(document.getElementById("agudos").value),
    capturingAudio: capturingAudio
  });
}

chrome.storage.local.get(["volumen", "graves", "medios", "agudos", "activo"], (data) => {
  if (data.volumen !== undefined) document.getElementById("volumen").value = data.volumen;
  if (data.graves !== undefined) document.getElementById("graves").value = data.graves;
  if (data.medios !== undefined) document.getElementById("medios").value = data.medios;
  if (data.agudos !== undefined) document.getElementById("agudos").value = data.agudos;

  if (data.capturingAudio) {
    capturingAudio = true;
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
  console.log('Popup loaded');
  const boton = document.getElementById("activar");
  const estado = document.getElementById("estado");
  const debug = document.getElementById("debug");

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
      openOffscreenPort();


    }
  });

  // Ejemplo: Enviar un mensaje al offscreen cuando se hace clic en un botón.
  // const miBoton = document.getElementById('miBoton');
  // if (miBoton) {
  //   miBoton.addEventListener('click', () => {
  //     port.postMessage({ action: "botonClic", data: "datos del botón" });
  //   });
  // }
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
        alert("No se puede capturar esta pestaña. Abrí una página web con audio 😊");
        return;
      }
      const streamId = await chrome.tabCapture.getMediaStreamId({ targetTabId: tabId });
      await chrome.runtime.sendMessage({
        type: "start-processing",
        // target: "offscreen",
        tabId,
        streamId,
        level: parseFloat(document.getElementById("volumen").value),
        graves: parseFloat(document.getElementById("graves").value),
        medios: parseFloat(document.getElementById("medios").value),
        agudos: parseFloat(document.getElementById("agudos").value),
      });
      boton.textContent = "Detener Audio 🔇";
      capturingAudio = true;
      // updateVisualizer();
    } else {
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

async function getActiveTabId() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab.id;
}

function drawVisualizer(data) {
  const canvas = document.getElementById("visual");
  const ctx = canvas.getContext("2d");
  const bufferLength = data["post"].length;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fef6f9";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const barWidth = (canvas.width / bufferLength) * 1.5;

  let x = 0;
  console.log("Dibujando visual...")
  for (let i = 0; i < bufferLength; i++) {
    const barHeight = data["post"][i];
    // ctx.fillStyle = `rgb(${barHeight + 100}, 80, 150)`;
    ctx.fillStyle = `rgb(110, 110, 110)`;
    ctx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);
    x += barWidth + 1;
  }
  x = 0;
  for (let i = 0; i < bufferLength; i++) {
    const barHeight = data["pre"][i];
    // ctx.fillStyle = `rgb(${barHeight + 100}, 80, 150)`;
    ctx.fillStyle = `rgb(80, 10, 10)`;
    ctx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);
    x += barWidth + 1;
  }
}

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "visualizer-data" && msg.data) {
    drawVisualizer(msg.data);
  }
});

["volumen", "graves", "medios", "agudos"].forEach((id) => {
  document.getElementById(id).addEventListener("input", async (e) => {
    const tabId = await getActiveTabId();
    chrome.runtime.sendMessage({
      type: "ajustar-filtro",
      // target: "offscreen",
      tabId,
      banda: id,
      valor: parseFloat(e.target.value),
    });
    guardarEstado();
  })
});

function updateVisualizer() {
  function loop() {
    if (offscreenPort) {
      offscreenPort.postMessage({
        type: "give-me-viz",
        target: "offscreen",
      });
    } else {
      estado.textContent = "no hay puerto offscreen";
    }
    const id = requestAnimationFrame(loop);
    loops = id;
  }
  loop();
}

function openOffscreenPort () {
  try {
    offscreenPort = chrome.runtime.connect({ name: "popup-visualizer" });
    estado.textContent = "Conectado al offscreen";

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