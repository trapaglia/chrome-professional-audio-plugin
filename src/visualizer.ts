import { smoothPoints } from "./utils.js";
import { getActiveFrequencyMarker, getActiveQMarker } from "./config.js";

type VisualizerData = {
    pre: number[];
    mid: number[];
    post: number[];
    minDecibels: number;
    maxDecibels: number;
}

// export function drawVisualizer(data: { [key: string]: number[] | number }) {
export function drawVisualizer(data: VisualizerData) {
  const preData: number[] = data["pre"] || [];
  const midData: number[] = data["mid"] || [];
  const postData: number[] = data["post"] || [];
  const minDecibels: number = data["minDecibels"] || -100;
  const maxDecibels: number = data["maxDecibels"] || -25;
  const canvas = document.getElementById("visual");
  let ctx: CanvasRenderingContext2D | null = null;
  if (canvas instanceof HTMLCanvasElement) {
    ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Critical: Canvas context not found or 'visual' element is not a canvas.");
  } else {
    throw new Error("Critical: 'visual' element is not a canvas.");
  }

  const bufferLength = preData.length;

  // Detectar si el modo oscuro está activo
  const isDarkMode = document.body.classList.contains('dark-mode');
  
  // Fondo adaptado al tema actual
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = isDarkMode ? "#121212" : "#fefefe"; // Oscuro o claro según el tema
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Función para normalizar valores de dB a altura de barra (0-1)
  const normalizeDb = (dbValue: number) => {
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
    let x = (octave / totalOctaves) * canvas.width;
    
    // Aplicar offset a todas las líneas excepto la última (17kHz)
    if (index < freqLabels.length - 1) {
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
    ctx.fillText(freq >= 1000 ? `${freq/1000}k` : freq.toString(), x - 10, canvas.height - 5);
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
  const midPoints = []; 
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
    
    // Nuevo: almacenar puntos para el visualizador intermedio
    if (i < midData.length) {
      const y = canvas.height - (normalizeDb(midData[i]) * canvas.height);
      midPoints.push({ x, y });
    }
    
    if (i < postData.length) {
      const y = canvas.height - (normalizeDb(postData[i]) * canvas.height);
      postPoints.push({ x, y });
    }
  }
  
  // Aplicar suavizado a los puntos
  const smoothedPrePoints = smoothPoints(prePoints, 7, canvas.width);
  const smoothedMidPoints = smoothPoints(midPoints, 7, canvas.width); 
  const smoothedPostPoints = smoothPoints(postPoints, 7, canvas.width);
  
  // Efecto glow
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  // Pre-EQ: violeta vivo con glow
  ctx.shadowColor = "rgba(190, 90, 255, 0.4)";
  ctx.strokeStyle = "rgba(190, 90, 255, 0.8)";
  ctx.fillStyle = "rgba(190, 90, 255, 0.3)";
  ctx.lineWidth = 2;
  
  // Dibujar línea para pre-EQ
  ctx.beginPath();
  ctx.moveTo(0, canvas.height); 
  
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

  // Nuevo: Mid-EQ (después de filtros, antes de compresor): amarillo/naranja con glow
  ctx.shadowColor = "rgba(255, 180, 50, 0.4)";
  ctx.strokeStyle = "rgba(255, 180, 50, 0.8)";
  ctx.fillStyle = "rgba(255, 180, 50, 0.3)";
  
  // Dibujar línea para mid-EQ
  ctx.beginPath();
  ctx.moveTo(0, canvas.height); 
  
  // Dibujar la línea que une los puntos
  smoothedMidPoints.forEach(point => {
    ctx.lineTo(point.x, point.y);
  });
  
  // Cerrar el path hasta la base
  ctx.lineTo(canvas.width, canvas.height);
  ctx.closePath();
  
  // Rellenar el área bajo la curva
  ctx.fill();
  
  // Dibujar la línea del contorno
  ctx.beginPath();
  if (smoothedMidPoints.length > 0) {
    ctx.moveTo(smoothedMidPoints[0].x, smoothedMidPoints[0].y);
    for (let i = 1; i < smoothedMidPoints.length; i++) {
      ctx.lineTo(smoothedMidPoints[i].x, smoothedMidPoints[i].y);
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

  // Limpiar efectos
  ctx.shadowBlur = 0;
  ctx.shadowColor = "transparent";

  // Agregar leyenda para los colores
  const legendY = 20;
  const legendSpacing = 120;
  
  // Leyenda para Pre-EQ (violeta)
  ctx.fillStyle = "rgba(190, 90, 255, 0.8)";
  ctx.fillRect(10, legendY - 10, 10, 10);
  ctx.fillStyle = isDarkMode ? "#e0e0e0" : "#333";
  ctx.fillText("Pre-EQ", 25, legendY);
  
  // Leyenda para Mid-EQ (amarillo/naranja)
  ctx.fillStyle = "rgba(255, 180, 50, 0.8)";
  ctx.fillRect(10 + legendSpacing, legendY - 10, 10, 10);
  ctx.fillStyle = isDarkMode ? "#e0e0e0" : "#333";
  ctx.fillText("Post-Filtros", 25 + legendSpacing, legendY);
  
  // Leyenda para Post-EQ (verde)
  ctx.fillStyle = "rgba(50, 220, 120, 0.8)";
  ctx.fillRect(10 + legendSpacing * 2, legendY - 10, 10, 10);
  ctx.fillStyle = isDarkMode ? "#e0e0e0" : "#333";
  ctx.fillText("Post-Compresor", 25 + legendSpacing * 2, legendY);

  // Dibujar el marcador de frecuencia activa si existe
  const activeFrequencyMarker = getActiveFrequencyMarker();
  const activeQMarker = getActiveQMarker();
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