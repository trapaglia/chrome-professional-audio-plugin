import { guardarEstado } from "./state_memory.js";

// Función para aplicar una configuración cargada
async function aplicarConfiguracion(config) {
  console.log("Aplicando configuración:", config);
  
  // Aplicar volumen
  const volumenSlider = document.getElementById('volumen') as HTMLInputElement;
  if (!volumenSlider) {
    console.error("[ERROR] No se encontró el slider de volumen");
    return;
  }
  volumenSlider.value = config.volumen;
  updateVolumeText(config.volumen);
  
  // Aplicar modo oscuro
  const darkModeCheckbox : HTMLInputElement = document.getElementById('dark-mode') as HTMLInputElement;
  if (config.darkMode) {
    document.body.classList.add('dark-mode');
    darkModeCheckbox.checked = true;
  } else {
    document.body.classList.remove('dark-mode');
    darkModeCheckbox.checked = false;
  }
  
  // Aplicar configuración del compresor
  const compresorActivoCheckbox : HTMLInputElement = document.getElementById('compresor-activo') as HTMLInputElement;
  const thresholdSlider : HTMLInputElement = document.getElementById('threshold') as HTMLInputElement;
  const ratioSlider : HTMLInputElement = document.getElementById('ratio') as HTMLInputElement;
  const kneeSlider : HTMLInputElement = document.getElementById('knee') as HTMLInputElement;
  const attackSlider : HTMLInputElement = document.getElementById('attack') as HTMLInputElement;
  const releaseSlider : HTMLInputElement = document.getElementById('release') as HTMLInputElement;
  
  compresorActivoCheckbox.checked = config.compresor.activo;
  
  thresholdSlider.value = config.compresor.threshold;
  compresorParams.threshold = config.compresor.threshold;
  actualizarValorCompresor('threshold', config.compresor.threshold);
  
  ratioSlider.value = config.compresor.ratio;
  compresorParams.ratio = config.compresor.ratio;
  actualizarValorCompresor('ratio', config.compresor.ratio);
  
  kneeSlider.value = config.compresor.knee;
  compresorParams.knee = config.compresor.knee;
  actualizarValorCompresor('knee', config.compresor.knee);
  
  attackSlider.value = config.compresor.attack;
  compresorParams.attack = config.compresor.attack;
  actualizarValorCompresor('attack', config.compresor.attack);
  
  releaseSlider.value = config.compresor.release;
  compresorParams.release = config.compresor.release;
  actualizarValorCompresor('release', config.compresor.release);
  
  // Limpiar filtros dinámicos actuales
  const filtrosContainer = document.getElementById('filtros-container');
  filtrosContainer.innerHTML = '';
  
  // Importar la función necesaria para crear filtros
  try {
    if (config.filtrosDinamicos && config.filtrosDinamicos.length > 0) {
      // Corregir los nombres de propiedades para que coincidan con lo que espera filters_handling.js
      const filtrosCorregidos = config.filtrosDinamicos.map(filtro => ({
        id: filtro.id,
        freq: filtro.frecuencia || filtro.freq, // Soportar ambos formatos
        q: filtro.q,
        gain: filtro.ganancia || filtro.gain, // Soportar ambos formatos
        bypass: filtro.bypass
      }));
      
      console.log("Filtros corregidos:", filtrosCorregidos);
      
      // Guardar los filtros en el storage local para que cargarFiltros los encuentre
      chrome.storage.local.set({ filtrosDinamicos: filtrosCorregidos }, async () => {
        // Importar el módulo y llamar a cargarFiltros
        const filtersModule = await import('./filters_interface.js');
        filtersModule.cargarFiltros();
        
        // Enviar configuración al offscreen si está capturando audio
        if (localEstado.capturingAudio) {
          enviarConfiguracionAlOffscreen(config);
        }
      });
    } else {
      // Si no hay filtros, solo enviar la configuración del compresor y volumen
      if (localEstado.capturingAudio) {
        enviarConfiguracionAlOffscreen(config);
      }
    }
  } catch (error) {
    console.error("Error al cargar los filtros:", error);
  }
  
  // Guardar el estado actualizado
  guardarEstado();
}

// Actualizar el texto del valor de volumen en dB
export function updateVolumeText(dbValue: number) {
  const volumeValueElement = document.getElementById("volumen-value");
  if (volumeValueElement) {
    volumeValueElement.textContent = `${dbValue} dB`;
  }
}

type FiltroDinamico = {
    id: string;
    frecuencia: number;
    q: number;
    ganancia: number;
    bypass: boolean;
}

// Función para obtener la configuración actual
export function obtenerConfiguracionActual() {
  // Obtener valores de volumen
  const volumenSlider = document.getElementById('volumen') as HTMLInputElement;
  const volumen = parseFloat(volumenSlider.value);
  
  // Obtener valores de filtros dinámicos
  const filtrosDinamicos: FiltroDinamico[] = [];
  const filtrosContainer = document.getElementById('filtros-container');
  if (!filtrosContainer) {
    console.error("[ERROR] No se encontró el contenedor de filtros dinámicos");
    return;
  }
  const filtrosElements = filtrosContainer.querySelectorAll('.filtro-dinamico');
  
  filtrosElements.forEach(filtroElement => {
    if (!(filtroElement instanceof HTMLElement)) {
        console.error("[ERROR] Elemento de filtro no es un HTMLElement");
        return;
    }
    const id : string = filtroElement.dataset.id || '';
    const frecuenciaInput : HTMLInputElement = filtroElement.querySelector('.frecuencia') as HTMLInputElement;
    const qInput : HTMLInputElement = filtroElement.querySelector('.q') as HTMLInputElement;
    const gananciaInput : HTMLInputElement = filtroElement.querySelector('.ganancia') as HTMLInputElement;
    const bypassInput : HTMLInputElement = filtroElement.querySelector('.bypass') as HTMLInputElement;
    const frecuencia : number = parseFloat(frecuenciaInput.value);
    const q : number = parseFloat(qInput.value);
    const ganancia : number = parseFloat(gananciaInput.value);
    const bypass : boolean = bypassInput.checked;
    
    filtrosDinamicos.push({
      id,
      frecuencia,
      q,
      ganancia,
      bypass
    });
  });
  
  // Obtener configuración del compresor
  const compresorCheckbox : HTMLInputElement = document.getElementById('compresor-activo') as HTMLInputElement;
  const compresorActivo : boolean = compresorCheckbox.checked;
  const thresholdInput : HTMLInputElement = document.getElementById('threshold') as HTMLInputElement;
  const threshold : number = parseFloat(thresholdInput.value);
  const ratioInput : HTMLInputElement = document.getElementById('ratio') as HTMLInputElement;
  const ratio : number = parseFloat(ratioInput.value);
  const kneeInput : HTMLInputElement = document.getElementById('knee') as HTMLInputElement;
  const knee : number = parseFloat(kneeInput.value);
  const attackInput : HTMLInputElement = document.getElementById('attack') as HTMLInputElement;
  const attack : number = parseFloat(attackInput.value);
  const releaseInput : HTMLInputElement = document.getElementById('release') as HTMLInputElement;
  const release : number = parseFloat(releaseInput.value);
  
  // Crear objeto de configuración
  return {
    volumen,
    filtrosDinamicos,
    compresor: {
      activo: compresorActivo,
      threshold,
      ratio,
      knee,
      attack,
      release
    },
    darkMode: document.body.classList.contains('dark-mode')
  };
}
