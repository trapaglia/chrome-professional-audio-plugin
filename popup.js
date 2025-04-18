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
// Variables para el compresor
let compresorActivo = false;
let compresorParams = {
  threshold: -24,
  ratio: 4,
  knee: 30,
  attack: 0.003,
  release: 0.25
};

// Guardar y restaurar estado de los 8 sliders + estado de audio
function guardarEstado() {
  const keys = ["volumen"];
  if (staticFiltering) keys.push(...filters);
  const estado = { 
    capturingAudio: capturingAudio,
    darkMode: document.body.classList.contains('dark-mode'),
    compresor: {
      activo: document.getElementById('compresor-activo').checked,
      threshold: parseFloat(document.getElementById('threshold').value),
      ratio: parseFloat(document.getElementById('ratio').value),
      knee: parseFloat(document.getElementById('knee').value),
      attack: parseFloat(document.getElementById('attack').value),
      release: parseFloat(document.getElementById('release').value)
    }
  };
  keys.forEach((key) => {
    estado[key] = parseFloat(document.getElementById(key)?.value);
  });
  chrome.storage.local.set(estado);
}

chrome.storage.local.get(["volumen", ...filters, "capturingAudio", "darkMode"], (data) => {
  Object.entries(data).forEach(([key, value]) => {
    if (key === "darkMode") {
      if (value) {
        document.body.classList.add('dark-mode');
        document.getElementById('dark-mode').checked = true;
      }
    } else {
      const el = document.getElementById(key);
      if (el) el.value = value;
    }
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

  // Agregar evento para el checkbox de modo oscuro
  document.getElementById("dark-mode").addEventListener("change", (e) => {
    if (e.target.checked) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
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
  
  // Cargar el estado guardado
  cargarEstado();
});

export async function getActiveTabId() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab.id;
}

function drawVisualizer(data) {
  const preData = data["pre"];
  const postData = data["post"];
  const minDecibels = data["minDecibels"] || -100;
  const maxDecibels = data["maxDecibels"] || -25;
  const canvas = document.getElementById("visual");
  const ctx = canvas.getContext("2d");
  const bufferLength = preData.length;

  // Detectar si el modo oscuro está activo
  const isDarkMode = document.body.classList.contains('dark-mode');
  
  // Fondo adaptado al tema actual
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = isDarkMode ? "#121212" : "#fefefe"; // Oscuro o claro según el tema
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Función para normalizar valores de dB a altura de barra (0-1)
  const normalizeDb = (dbValue) => {
    // Limitar el valor entre minDecibels y maxDecibels
    const clampedDb = Math.max(minDecibels, Math.min(maxDecibels, dbValue));
    // Normalizar a un valor entre 0 y 1
    return (clampedDb - minDecibels) / (maxDecibels - minDecibels);
  };

  // Dibujar escala de frecuencia logarítmica
  ctx.fillStyle = isDarkMode ? "#aaaaaa" : "#aaa";
  ctx.font = "10px Arial";
  const freqLabels = [30, 60, 120, 250, 500, 1000, 2000, 4000, 8000, 17000];
  freqLabels.forEach((freq, index) => {
    // Convertir frecuencia a posición X usando escala de octavas
    const octave = Math.log2(freq / 20); // Número de octavas desde 20Hz
    const totalOctaves = Math.log2(17000 / 20); // Aproximadamente 9.7 octavas (hasta 17kHz)
    
    // Ajustar posición X para alinear con las etiquetas HTML
    let x = (octave / totalOctaves) * canvas.width;
    
    // Aplicar offset a todas las líneas excepto la última (17kHz)
    if (index < freqLabels.length - 1) {
      // Aplicar un offset progresivo: mayor para las frecuencias bajas, menor para las altas
      const offsetFactor = 1 - (index / (freqLabels.length - 1));
      x += 10 * offsetFactor;
    }
    
    // Dibujar línea vertical
    ctx.strokeStyle = isDarkMode ? "#333333" : "#ddd";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
    
    // Dibujar etiqueta
    ctx.fillStyle = isDarkMode ? "#e0e0e0" : "#333";
    ctx.fillText(freq >= 1000 ? `${freq/1000}k` : freq, x - 10, canvas.height - 5);
  });

  // Dibujar escala de dB
  const dbLabels = [-90, -80, -70, -60, -50, -40, -30];
  dbLabels.forEach(db => {
    const y = canvas.height - (normalizeDb(db) * canvas.height);
    
    // Dibujar línea horizontal
    ctx.strokeStyle = isDarkMode ? "#333333" : "#eee";
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
    
    // Dibujar etiqueta
    ctx.fillStyle = isDarkMode ? "#e0e0e0" : "#333";
    ctx.fillText(`${db} dB`, 5, y + 12);
  });

  // Calcular posiciones de puntos en escala de octavas
  const prePoints = [];
  const postPoints = [];
  
  // Crear posiciones de puntos en escala de octavas
  for (let i = 0; i < bufferLength; i++) {
    // Calculamos la frecuencia correspondiente a cada bin de la FFT
    // La FFT divide el rango de frecuencias en partes iguales (lineales)
    // Pero queremos visualizarlas en escala de octavas
    const freqRatio = i / bufferLength; // Posición relativa en el array (0-1)
    const nyquistFreq = 22050; // Frecuencia máxima representable (sampleRate/2)
    
    // Frecuencia lineal correspondiente al bin i de la FFT
    const linearFreq = freqRatio * nyquistFreq;
    
    // Solo procesamos hasta 17kHz
    if (linearFreq > 17000) break;
    
    // Solo incluimos frecuencias desde 20Hz
    if (linearFreq < 20) continue;
    
    // Convertir frecuencia a posición X usando escala de octavas
    const octave = Math.log2(linearFreq / 20); // Número de octavas desde 20Hz
    const totalOctaves = Math.log2(17000 / 20); // Aproximadamente 9.7 octavas (hasta 17kHz)
    const x = (octave / totalOctaves) * canvas.width * 0.995; // Usar el valor exacto de octavas
    
    // Almacenar puntos con sus valores de amplitud
    if (i < preData.length) {
      const y = canvas.height - (normalizeDb(preData[i]) * canvas.height);
      prePoints.push({ x, y });
    }
    
    if (i < postData.length) {
      const y = canvas.height - (normalizeDb(postData[i]) * canvas.height);
      postPoints.push({ x, y });
    }
  }
  
  // Aplicar suavizado a los puntos (promedio móvil)
  const smoothPoints = (points, windowSize) => {
    if (points.length <= windowSize) return points;
    
    const smoothed = [];
    
    // Primer punto se mantiene igual
    smoothed.push(points[0]);
    
    // Aplicar suavizado adaptativo: ventana más pequeña para bajas frecuencias, más grande para altas
    for (let i = 1; i < points.length - 1; i++) {
      // Calcular tamaño de ventana adaptativo basado en la posición x (frecuencia)
      // Más suavizado en altas frecuencias (x más grande)
      const adaptiveWindow = Math.min(
        Math.max(
          2, // Mínimo tamaño de ventana
          // Math.floor(windowSize * (points[i].x / canvas.width) * 4)
          Math.floor(windowSize * Math.pow((points[i].x / canvas.width), 2) * 3)
        ), 
        // Math.min(windowSize, Math.floor(points.length / 4)) // Limitar tamaño máximo
      );
      
      // Calcular índices para la ventana
      const halfWindow = Math.floor(adaptiveWindow / 2);
      const startIdx = Math.max(0, i - halfWindow);
      const endIdx = Math.min(points.length - 1, i + halfWindow);
      
      // Calcular promedio de valores y en la ventana
      let sumY = 0;
      for (let j = startIdx; j <= endIdx; j++) {
        sumY += points[j].y;
      }
      
      const avgY = sumY / (endIdx - startIdx + 1);
      smoothed.push({ x: points[i].x, y: avgY });
    }
    
    // Último punto se mantiene igual
    if (points.length > 1) {
      smoothed.push(points[points.length - 1]);
    }
    
    return smoothed;
  };
  
  // Aplicar suavizado a los puntos
  const smoothedPrePoints = smoothPoints(prePoints, 7);
  const smoothedPostPoints = smoothPoints(postPoints, 7);
  
  // ✨ Efecto glow
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  // 💜 Pre-EQ: violeta vivo con glow
  ctx.shadowColor = "rgba(190, 90, 255, 0.4)";
  ctx.strokeStyle = "rgba(190, 90, 255, 0.8)";
  ctx.fillStyle = "rgba(190, 90, 255, 0.3)";
  ctx.lineWidth = 2;
  
  // Dibujar línea para pre-EQ
  ctx.beginPath();
  ctx.moveTo(0, canvas.height); // Empezar desde la esquina inferior izquierda
  
  // Dibujar la línea que une los puntos
  smoothedPrePoints.forEach(point => {
    ctx.lineTo(point.x, point.y);
  });
  
  // Cerrar el path hasta la base
  ctx.lineTo(canvas.width, canvas.height);
  ctx.closePath();
  
  // Rellenar el área bajo la curva
  ctx.fill();
  
  // Dibujar la línea del contorno
  ctx.beginPath();
  if (smoothedPrePoints.length > 0) {
    ctx.moveTo(smoothedPrePoints[0].x, smoothedPrePoints[0].y);
    for (let i = 1; i < smoothedPrePoints.length; i++) {
      ctx.lineTo(smoothedPrePoints[i].x, smoothedPrePoints[i].y);
    }
    ctx.stroke();
  }

  // Post-EQ: verde neón claro con glow
  ctx.shadowColor = "rgba(50, 220, 120, 0.4)";
  ctx.strokeStyle = "rgba(50, 220, 120, 0.8)";
  ctx.fillStyle = "rgba(50, 220, 120, 0.3)";
  
  // Dibujar línea para post-EQ
  ctx.beginPath();
  ctx.moveTo(0, canvas.height); // Empezar desde la esquina inferior izquierda
  
  // Dibujar la línea que une los puntos
  smoothedPostPoints.forEach(point => {
    ctx.lineTo(point.x, point.y);
  });
  
  // Cerrar el path hasta la base
  ctx.lineTo(canvas.width, canvas.height);
  ctx.closePath();
  
  // Rellenar el área bajo la curva
  ctx.fill();
  
  // Dibujar la línea del contorno
  ctx.beginPath();
  if (smoothedPostPoints.length > 0) {
    ctx.moveTo(smoothedPostPoints[0].x, smoothedPostPoints[0].y);
    for (let i = 1; i < smoothedPostPoints.length; i++) {
      ctx.lineTo(smoothedPostPoints[i].x, smoothedPostPoints[i].y);
    }
    ctx.stroke();
  }

  // 🧽 Limpiar efectos
  ctx.shadowBlur = 0;
  ctx.shadowColor = "transparent";

  // Dibujar el marcador de frecuencia activa si existe
  if (activeFrequencyMarker) {
    // Convertir frecuencia a posición X usando escala de octavas
    const octave = Math.log2(activeFrequencyMarker / 20); // Número de octavas desde 20Hz
    const totalOctaves = Math.log2(17000 / 20); // Aproximadamente 9.7 octavas (hasta 17kHz)
    const x = (octave / totalOctaves) * canvas.width * 0.995; // Usar el valor exacto de octavas
    
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
    
    // Dibujar la campana de Q si tenemos tanto frecuencia como Q
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
      
      // Generar puntos para la curva de campana en escala logarítmica
      for (let i = -canvas.width/2; i <= canvas.width/2; i += 5) {
        const pointX = centerX + i;
        if (pointX >= 0 && pointX <= canvas.width) {
          // Convertir posición X a frecuencia
          const freq = 20 * Math.pow(10, (pointX / canvas.width) * Math.log10(17000 / 20));
          const freqRatio = freq / activeFrequencyMarker;
          
          // Fórmula de campana para filtro peaking en escala logarítmica
          const response = 1 / Math.sqrt(1 + Math.pow(activeQMarker * (freqRatio - 1/freqRatio), 2));
          const pointY = canvas.height - height * response;
          
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

// Función para convertir dB a valor de ganancia para Web Audio API
function dbToGain(db) {
  return Math.pow(10, db / 20);
}

// Actualizar el texto del valor de volumen en dB
function updateVolumeText(dbValue) {
  const volumeValueElement = document.getElementById("volumen-value");
  if (volumeValueElement) {
    volumeValueElement.textContent = `${dbValue} dB`;
  }
}

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

// Función para inicializar los controles del compresor
function inicializarCompresor() {
  const compresorActivoCheckbox = document.getElementById('compresor-activo');
  const threshold = document.getElementById('threshold');
  const ratio = document.getElementById('ratio');
  const knee = document.getElementById('knee');
  const attack = document.getElementById('attack');
  const release = document.getElementById('release');
  
  // Actualizar valores mostrados
  actualizarValorCompresor('threshold', threshold.value);
  actualizarValorCompresor('ratio', ratio.value);
  actualizarValorCompresor('knee', knee.value);
  actualizarValorCompresor('attack', attack.value);
  actualizarValorCompresor('release', release.value);
  
  // Event listeners para cambios en los controles
  compresorActivoCheckbox.addEventListener('change', async function() {
    compresorActivo = this.checked;
    await enviarConfiguracionCompresor();
    guardarEstado();
  });
  
  threshold.addEventListener('input', async function() {
    actualizarValorCompresor('threshold', this.value);
    compresorParams.threshold = parseFloat(this.value);
    await enviarConfiguracionCompresor();
    guardarEstado();
  });
  
  ratio.addEventListener('input', async function() {
    actualizarValorCompresor('ratio', this.value);
    compresorParams.ratio = parseFloat(this.value);
    await enviarConfiguracionCompresor();
    guardarEstado();
  });
  
  knee.addEventListener('input', async function() {
    actualizarValorCompresor('knee', this.value);
    compresorParams.knee = parseFloat(this.value);
    await enviarConfiguracionCompresor();
    guardarEstado();
  });
  
  attack.addEventListener('input', async function() {
    actualizarValorCompresor('attack', this.value);
    compresorParams.attack = parseFloat(this.value);
    await enviarConfiguracionCompresor();
    guardarEstado();
  });
  
  release.addEventListener('input', async function() {
    actualizarValorCompresor('release', this.value);
    compresorParams.release = parseFloat(this.value);
    await enviarConfiguracionCompresor();
    guardarEstado();
  });
}

// Función para actualizar los valores mostrados del compresor
function actualizarValorCompresor(tipo, valor) {
  const valorElement = document.getElementById(`${tipo}-value`);
  
  switch(tipo) {
    case 'threshold':
      valorElement.textContent = `${valor} dB`;
      break;
    case 'ratio':
      valorElement.textContent = `${valor}:1`;
      break;
    case 'knee':
      valorElement.textContent = `${valor} dB`;
      break;
    case 'attack':
      // Convertir a milisegundos para mejor legibilidad
      const attackMs = (parseFloat(valor) * 1000).toFixed(0);
      valorElement.textContent = `${attackMs} ms`;
      break;
    case 'release':
      // Convertir a milisegundos para mejor legibilidad
      const releaseMs = (parseFloat(valor) * 1000).toFixed(0);
      valorElement.textContent = `${releaseMs} ms`;
      break;
  }
}

// Función para enviar la configuración del compresor al script offscreen
async function enviarConfiguracionCompresor() {
  if (capturingAudio) {
    const tabId = await getActiveTabId();
    chrome.runtime.sendMessage({
      type: "ajustar-compresor",
      target: "offscreen",
      tabId,
      activo: compresorActivo,
      params: {
        threshold: compresorParams.threshold,
        ratio: compresorParams.ratio,
        knee: compresorParams.knee,
        attack: compresorParams.attack,
        release: compresorParams.release
      }
    });
  }
}

// Función para cargar el estado guardado
function cargarEstado() {
  chrome.storage.local.get("estado", function(data) {
    if (data.estado) {
      const estado = data.estado;
      
      // Cargar volumen
      if (estado.volumen !== undefined) {
        document.getElementById("volumen").value = estado.volumen;
        document.getElementById("volumen-value").textContent = `${estado.volumen} dB`;
      }
      
      // Cargar modo oscuro
      if (estado.darkMode !== undefined) {
        if (estado.darkMode) {
          document.body.classList.add('dark-mode');
          document.getElementById('dark-mode').checked = true;
        } else {
          document.body.classList.remove('dark-mode');
          document.getElementById('dark-mode').checked = false;
        }
      }
      
      // Cargar configuración del compresor
      if (estado.compresor) {
        document.getElementById('compresor-activo').checked = estado.compresor.activo;
        compresorActivo = estado.compresor.activo;
        
        if (estado.compresor.threshold !== undefined) {
          document.getElementById('threshold').value = estado.compresor.threshold;
          compresorParams.threshold = estado.compresor.threshold;
          actualizarValorCompresor('threshold', estado.compresor.threshold);
        }
        
        if (estado.compresor.ratio !== undefined) {
          document.getElementById('ratio').value = estado.compresor.ratio;
          compresorParams.ratio = estado.compresor.ratio;
          actualizarValorCompresor('ratio', estado.compresor.ratio);
        }
        
        if (estado.compresor.knee !== undefined) {
          document.getElementById('knee').value = estado.compresor.knee;
          compresorParams.knee = estado.compresor.knee;
          actualizarValorCompresor('knee', estado.compresor.knee);
        }
        
        if (estado.compresor.attack !== undefined) {
          document.getElementById('attack').value = estado.compresor.attack;
          compresorParams.attack = estado.compresor.attack;
          actualizarValorCompresor('attack', estado.compresor.attack);
        }
        
        if (estado.compresor.release !== undefined) {
          document.getElementById('release').value = estado.compresor.release;
          compresorParams.release = estado.compresor.release;
          actualizarValorCompresor('release', estado.compresor.release);
        }
      }
    }
  });
}