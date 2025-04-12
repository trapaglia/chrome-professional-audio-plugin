let isActivo = false;
let boton = document.getElementById("activar");
let drawId;

chrome.runtime.sendMessage({ type: "abrir-offscreen" }, () => {
  const port = chrome.runtime.connect({ name: "popup-visualizer" });
  port.onMessage.addListener((msg) => {
    if (msg.type === "visualizer-data" && msg.data) {
      drawVisualizer(msg.data);
    }
  });
});


async function getActiveTabId() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab.id;
}

function drawVisualizer(dataArray) {
  const canvas = document.getElementById("visual");
  const ctx = canvas.getContext("2d");
  const bufferLength = dataArray.length;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fef6f9";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const barWidth = (canvas.width / bufferLength) * 1.5;
  let x = 0;

  console.log("Dibujando visual...")
  for (let i = 0; i < bufferLength; i++) {
    const barHeight = dataArray[i];
    ctx.fillStyle = `rgb(${barHeight + 100}, 80, 150)`;
    ctx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);
    x += barWidth + 1;
  }
}

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "visualizer-data" && msg.data) {
    drawVisualizer(msg.data);
  }
});

boton.addEventListener("click", async () => {
  console.log("Activando audio...")
  const tabId = await getActiveTabId();

  if (!isActivo) {
    const streamId = await chrome.tabCapture.getMediaStreamId({ targetTabId: tabId });
    await chrome.runtime.sendMessage({
      type: "start-processing",
      target: "offscreen",
      tabId,
      streamId,
      level: parseFloat(document.getElementById("volumen").value),
      graves: parseFloat(document.getElementById("graves").value),
      medios: parseFloat(document.getElementById("medios").value),
      agudos: parseFloat(document.getElementById("agudos").value),
    });
    boton.textContent = "Detener Audio 🔇";
    isActivo = true;
  } else {
    await chrome.runtime.sendMessage({
      type: "stop-processing",
      target: "offscreen",
      tabId,
    });
    boton.textContent = "Activar Audio 🎤";
    isActivo = false;
  }

});

["volumen", "graves", "medios", "agudos"].forEach((id) => {
  document.getElementById(id).addEventListener("input", async (e) => {
    const tabId = await getActiveTabId();
    chrome.runtime.sendMessage({
      type: "ajustar-filtro",
      target: "offscreen",
      tabId,
      banda: id,
      valor: parseFloat(e.target.value),
    });
  });
});