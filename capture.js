// Este script se inyecta en la pestaña actual para procesar el audio

// Configuración del ecualizador
let audioContext = null;
let filtros = {};
let source = null;
let audioDestination = null;

// Valores de los sliders
let sliderValues = {
  graves: 0,
  medios: 0,
  agudos: 0
};

// Mapeo de bandas a filtros
const bandaMap = {
  graves: "low",
  medios: "mid",
  agudos: "high",
};

// Inicializar el procesamiento de audio con un stream ya capturado
function iniciarAudio(streamId) {
  try {
    if (audioContext) {
      return { success: true, message: "El audio ya está siendo procesado" };
    }
    
    // Conectar con el stream capturado
    navigator.mediaDevices.getUserMedia({
      audio: {
        mandatory: {
          chromeMediaSource: 'tab',
          chromeMediaSourceId: streamId
        }
      },
      video: false
    })
    .then(stream => {
      audioContext = new AudioContext();
      source = audioContext.createMediaStreamSource(stream);
      
      // Configurar filtros
      filtros.low = audioContext.createBiquadFilter();
      filtros.low.type = "lowshelf";
      filtros.low.frequency.value = 60;
      filtros.low.gain.value = sliderValues.graves;

      filtros.mid = audioContext.createBiquadFilter();
      filtros.mid.type = "peaking";
      filtros.mid.frequency.value = 1000;
      filtros.mid.Q.value = 1;
      filtros.mid.gain.value = sliderValues.medios;

      filtros.high = audioContext.createBiquadFilter();
      filtros.high.type = "highshelf";
      filtros.high.frequency.value = 8000;
      filtros.high.gain.value = sliderValues.agudos;

      // Crear un destino para el audio procesado
      audioDestination = audioContext.createMediaStreamDestination();
      
      // Conectar los filtros
      source.connect(filtros.low);
      filtros.low.connect(filtros.mid);
      filtros.mid.connect(filtros.high);
      filtros.high.connect(audioDestination);
      
      // Crear un elemento de audio para reproducir el audio procesado
      const audioElement = new Audio();
      audioElement.srcObject = audioDestination.stream;
      audioElement.play();
      
      // Notificar a la extensión que el audio está siendo procesado
      chrome.runtime.sendMessage({ 
        action: "audio_iniciado",
        success: true 
      });
    })
    .catch(error => {
      console.error("Error al procesar el audio:", error);
      chrome.runtime.sendMessage({ 
        action: "audio_iniciado",
        success: false,
        error: error.message || "Error al procesar el audio"
      });
    });
    
    return { success: true, message: "Iniciando procesamiento de audio..." };
  } catch (error) {
    console.error("Error al iniciar el audio:", error);
    return { success: false, error: error.message || "Error desconocido" };
  }
}

// Ajustar un filtro
function ajustarFiltro(banda, valor) {
  try {
    const filtro = filtros[bandaMap[banda]];
    if (filtro) {
      filtro.gain.value = valor;
      sliderValues[banda] = valor;
      return { success: true };
    } else {
      return { success: false, error: "Filtro no encontrado" };
    }
  } catch (error) {
    console.error("Error al ajustar el filtro:", error);
    return { success: false, error: error.message || "Error desconocido" };
  }
}

// Detener el procesamiento de audio
function detenerAudio() {
  try {
    if (audioContext) {
      if (source && source.mediaStream) {
        const tracks = source.mediaStream.getTracks();
        tracks.forEach(track => track.stop());
      }
      audioContext.close();
      audioContext = null;
      filtros = {};
      source = null;
      return { success: true };
    } else {
      return { success: false, error: "El audio no está siendo procesado" };
    }
  } catch (error) {
    console.error("Error al detener el audio:", error);
    return { success: false, error: error.message || "Error desconocido" };
  }
}

// Escuchar mensajes de la extensión
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "iniciar_audio") {
    const resultado = iniciarAudio(message.streamId);
    sendResponse(resultado);
  } else if (message.action === "ajustar_filtro") {
    const resultado = ajustarFiltro(message.banda, message.valor);
    sendResponse(resultado);
  } else if (message.action === "detener_audio") {
    const resultado = detenerAudio();
    sendResponse(resultado);
  } else if (message.action === "get_status") {
    sendResponse({ 
      success: true, 
      activo: !!audioContext,
      valores: sliderValues
    });
  }
  return true;
});
