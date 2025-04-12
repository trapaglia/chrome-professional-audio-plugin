let isActivo = false;
let boton = document.getElementById("activar");

chrome.storage.local.get(["volumen", "graves", "medios", "agudos", "activo"], (data) => {
  if (data.volumen !== undefined) document.getElementById("volumen").value = data.volumen;
  if (data.graves !== undefined) document.getElementById("graves").value = data.graves;
  if (data.medios !== undefined) document.getElementById("medios").value = data.medios;
  if (data.agudos !== undefined) document.getElementById("agudos").value = data.agudos;

  if (data.activo) {
    isActivo = true;
    boton.textContent = "Detener Audio 🔇";
  }
});

chrome.runtime.sendMessage({ type: "abrir-offscreen", target: "offscreen" }, () => {
  const port = chrome.runtime.connect({ name: "popup-visualizer" });
//   // port.onMessage.addListener((msg) => {
//   //   if (msg.type === "visualizer-data" && msg.data) {
//   //     drawVisualizer(msg.data);
//   //     console.log("entro a visualizer-data")
//   //   }
//   // });
//   console.log("entro a abrir-offscreen")
});

function guardarEstado() {
  chrome.storage.local.set({
    volumen: parseFloat(document.getElementById("volumen").value),
    graves: parseFloat(document.getElementById("graves").value),
    medios: parseFloat(document.getElementById("medios").value),
    agudos: parseFloat(document.getElementById("agudos").value),
    activo: isActivo
  });
}

async function getActiveTabId() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab.id;
}

boton.addEventListener("click", async () => {
  const tabId = await getActiveTabId();

  if (!isActivo) {
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
    guardarEstado();
  });
});