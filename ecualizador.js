// Variables globales
let audioContext = null;
let filtros = {};
let source = null;
let audioStream = null;

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

// Capturar el audio de la pestaña actual
function capturarAudio() {
  document.getElementById("estado").textContent = "Solicitando permisos para capturar audio...";
  
  // Solicitar permiso para capturar audio mediante getDisplayMedia
  navigator.mediaDevices.getDisplayMedia({ audio: true, video: true })
    .then(stream => {
      // Guardar solo las pistas de audio
      const audioTracks = stream.getAudioTracks();
      
      // Detener las pistas de video si existen
      stream.getVideoTracks().forEach(track => track.stop());
      
      if (audioTracks.length === 0) {
        document.getElementById("estado").textContent = "Error: No se detectó audio en la captura 😢";
        return;
      }
      
      // Crear un nuevo stream solo con audio
      audioStream = new MediaStream(audioTracks);
      
      // Iniciar el procesamiento de audio
      iniciarAudio();
    })
    .catch(error => {
      console.error("Error al capturar el audio:", error);
      document.getElementById("estado").textContent = `Error al capturar el audio: ${error.message || "Error desconocido"} 😢`;
    });
}

// Inicializar el procesamiento de audio
function iniciarAudio() {
  try {
    if (audioContext) {
      document.getElementById("estado").textContent = "El audio ya está siendo procesado 🎶";
      return;
    }
    
    if (!audioStream) {
      document.getElementById("estado").textContent = "Error: No hay stream de audio disponible 😢";
      return;
    }
    
    document.getElementById("estado").textContent = "Iniciando procesamiento de audio...";
    
    // Crear el contexto de audio
    audioContext = new AudioContext();
    
    // Conectar el stream al contexto de audio
    source = audioContext.createMediaStreamSource(audioStream);
    
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
    
    // Conectar los filtros
    source.connect(filtros.low);
    filtros.low.connect(filtros.mid);
    filtros.mid.connect(filtros.high);
    filtros.high.connect(audioContext.destination);
    
    document.getElementById("estado").textContent = "¡Audio ecualizado! 🎶";
    document.getElementById("activar").disabled = true;
  } catch (error) {
    console.error("Error al iniciar el audio:", error);
    document.getElementById("estado").textContent = `Error al iniciar el audio: ${error.message || "Error desconocido"} 😢`;
    document.getElementById("activar").disabled = false;
    audioContext = null;
  }
}

// Detener el audio
function detenerAudio() {
  if (audioStream) {
    // Detener todas las pistas del stream
    audioStream.getTracks().forEach(track => track.stop());
    audioStream = null;
  }
  
  if (audioContext) {
    // Cerrar el contexto de audio
    audioContext.close();
    audioContext = null;
  }
  
  document.getElementById("estado").textContent = "Audio detenido";
  document.getElementById("activar").disabled = false;
}

// Cargar valores guardados
chrome.storage.local.get(['sliderValues'], (result) => {
  if (result.sliderValues) {
    sliderValues = result.sliderValues;
    Object.entries(sliderValues).forEach(([id, valor]) => {
      const slider = document.getElementById(id);
      if (slider) {
        slider.value = valor;
      }
    });
  }
});

// Inicializar la interfaz cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
  // Configurar botones
  document.getElementById("activar").addEventListener("click", capturarAudio);
  document.getElementById("detener").addEventListener("click", detenerAudio);
  
  // Configurar los sliders
  ["graves", "medios", "agudos"].forEach((id) => {
    document.getElementById(id).addEventListener("input", (e) => {
      const valor = parseFloat(e.target.value);
      sliderValues[id] = valor;
      
      // Guardar valores
      chrome.storage.local.set({ sliderValues: sliderValues });
      
      // Ajustar el filtro si está activo
      if (filtros[bandaMap[id]]) {
        filtros[bandaMap[id]].gain.value = valor;
      }
    });
  });
  
  // Mostrar mensaje inicial
  document.getElementById("estado").textContent = "Haz clic en 'Activar Audio' para comenzar";
});
