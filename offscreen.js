let audioContext = null;
let filtros = {};
let audioStreamSource = null;

const bandaMap = {
  graves: "low",
  medios: "mid",
  agudos: "high",
};

// Función para obtener el stream de audio del background script
async function getAudioStream() {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({ action: "get_audio_stream" }, (response) => {
      if (response && response.success && response.stream) {
        resolve(response.stream);
      } else {
        reject(new Error("No se pudo obtener el stream de audio"));
      }
    });
  });
}

// Configurar el procesamiento de audio
async function setupAudioProcessing(values) {
  try {
    const stream = await getAudioStream();
    
    audioContext = new AudioContext();
    audioStreamSource = audioContext.createMediaStreamSource(stream);

    // Configurar filtros
    filtros.low = audioContext.createBiquadFilter();
    filtros.low.type = "lowshelf";
    filtros.low.frequency.value = 60;
    filtros.low.gain.value = values?.graves || 0;

    filtros.mid = audioContext.createBiquadFilter();
    filtros.mid.type = "peaking";
    filtros.mid.frequency.value = 1000;
    filtros.mid.Q.value = 1;
    filtros.mid.gain.value = values?.medios || 0;

    filtros.high = audioContext.createBiquadFilter();
    filtros.high.type = "highshelf";
    filtros.high.frequency.value = 8000;
    filtros.high.gain.value = values?.agudos || 0;

    // Conectar los filtros
    audioStreamSource.connect(filtros.low);
    filtros.low.connect(filtros.mid);
    filtros.mid.connect(filtros.high);
    filtros.high.connect(audioContext.destination);

    return { success: true };
  } catch (error) {
    console.error('Error al configurar el audio:', error);
    return { success: false, error: error.message };
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "procesar_audio") {
    setupAudioProcessing(message.values)
      .then(result => sendResponse(result))
      .catch(error => sendResponse({ success: false, error: error.message }));
    return true;
  }

  if (message.action === "ajustar_filtro") {
    const filtro = filtros[bandaMap[message.banda]];
    if (filtro) {
      filtro.gain.value = message.valor;
      sendResponse({ success: true });
    } else {
      sendResponse({ success: false, error: "Filtro no encontrado" });
    }
    return true;
  }
});
