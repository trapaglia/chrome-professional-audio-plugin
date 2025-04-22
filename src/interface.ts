import { guardarEstado } from "./state_memory.ts";
import { compresorParams, setCompresorActivo } from "./config.ts";
import { actualizarValorCompresor } from "./compressor.ts";
import { localEstado } from "./state_memory.ts";
import { enviarConfiguracionAlOffscreen } from "./communications.ts";

// Función para aplicar una configuración cargada
export async function aplicarConfiguracion(config: ConfiguracionInterface) {
  console.log("Aplicando configuración:", config);
  
  // Aplicar volumen
  const volumenSlider = document.getElementById('volumen') as HTMLInputElement;
  if (!volumenSlider) {
    console.error("[ERROR] No se encontró el slider de volumen");
    return;
  }
  volumenSlider.value = config.volumen.toString();
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
  setCompresorActivo(config.compresor.activo);
  
  thresholdSlider.value = config.compresor.threshold.toString();
  compresorParams.threshold = config.compresor.threshold;
  actualizarValorCompresor('threshold', config.compresor.threshold);
  
  ratioSlider.value = config.compresor.ratio.toString();
  compresorParams.ratio = config.compresor.ratio;
  actualizarValorCompresor('ratio', config.compresor.ratio);
  
  kneeSlider.value = config.compresor.knee.toString();
  compresorParams.knee = config.compresor.knee;
  actualizarValorCompresor('knee', config.compresor.knee);
  
  attackSlider.value = config.compresor.attack.toString();
  compresorParams.attack = config.compresor.attack;
  actualizarValorCompresor('attack', config.compresor.attack);
  
  releaseSlider.value = config.compresor.release.toString();
  compresorParams.release = config.compresor.release;
  actualizarValorCompresor('release', config.compresor.release);
  
  // Limpiar filtros dinámicos actuales
  const filtrosContainer = document.getElementById('filtros-container') as HTMLElement;
  if (!filtrosContainer) {
    console.error("[ERROR] No se encontró el contenedor de filtros dinámicos");
    return;
  }
  filtrosContainer.innerHTML = '';
  
  // Importar la función necesaria para crear filtros
  try {
    if (config.filtrosDinamicos && config.filtrosDinamicos.length > 0) {
      // Guardar los filtros en el storage local para que cargarFiltros los encuentre
      chrome.storage.local.set({ filtrosDinamicos: config.filtrosDinamicos }, async () => {
        // Importar el módulo y llamar a cargarFiltros
        const filtersModule = await import('./filters_interface.ts');
        filtersModule.cargarFiltros();
        
        // Enviar configuración al offscreen si está capturando audio
        if (localEstado.capturingAudio) {
          await enviarConfiguracionAlOffscreen(config);
        }
      });
    } else {
      // Si no hay filtros, solo enviar la configuración del compresor y volumen
      if (localEstado.capturingAudio) {
        await enviarConfiguracionAlOffscreen(config);
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
export function obtenerConfiguracionActual(): ConfiguracionInterface {
    let confInterface: ConfiguracionInterface = {
        volumen: 0,
        filtrosDinamicos: [],
        compresor: {
            activo: false,
            threshold: 0,
            ratio: 1,
            knee: 0,
            attack: 0.1,
            release: 0.1
        },
        darkMode: false
    };

  // Obtener valores de volumen
  const volumenSlider = document.getElementById('volumen') as HTMLInputElement;
  if (!volumenSlider) {
    console.error("[ERROR] No se encontró el slider de volumen");
    return confInterface;
  } else confInterface.volumen = parseFloat(volumenSlider.value);
  
  // Obtener valores de filtros dinámicos
  const filtrosContainer = document.getElementById('filtros-container');
  if (!filtrosContainer) {
    console.error("[ERROR] No se encontró el contenedor de filtros dinámicos");
    return confInterface;
  }
  const filtrosElements = filtrosContainer.querySelectorAll('.filtro-dinamico');
  
  const filtrosDinamicos: FiltroDinamico[] = [];
  filtrosElements.forEach(filtroElement => {
    if (!(filtroElement instanceof HTMLElement)) {
        console.error("[ERROR] Elemento de filtro no es un HTMLElement");
        return;
    }
    const frecuenciaInput : HTMLInputElement = filtroElement.querySelector('.frecuencia') as HTMLInputElement;
    const qInput : HTMLInputElement = filtroElement.querySelector('.q') as HTMLInputElement;
    const gananciaInput : HTMLInputElement = filtroElement.querySelector('.ganancia') as HTMLInputElement;
    const bypassInput : HTMLInputElement = filtroElement.querySelector('.bypass') as HTMLInputElement;
    const fd : FiltroDinamico = {
      id: filtroElement.dataset.id || '',
      frecuencia: parseFloat(frecuenciaInput.value),
      q: parseFloat(qInput.value),
      ganancia: parseFloat(gananciaInput.value),
      bypass: bypassInput.checked
    };
    filtrosDinamicos.push(fd);
  });
  
  // Obtener configuración del compresor
  const compresorCheckbox : HTMLInputElement = document.getElementById('compresor-activo') as HTMLInputElement;
  const compresorActivo : boolean = compresorCheckbox.checked;
  const thresholdInput : HTMLInputElement = document.getElementById('threshold') as HTMLInputElement;
  const ratioInput : HTMLInputElement = document.getElementById('ratio') as HTMLInputElement;
  const kneeInput : HTMLInputElement = document.getElementById('knee') as HTMLInputElement;
  const attackInput : HTMLInputElement = document.getElementById('attack') as HTMLInputElement;
  const releaseInput : HTMLInputElement = document.getElementById('release') as HTMLInputElement;
  
  confInterface = {
    volumen: parseFloat(volumenSlider.value),
    filtrosDinamicos,
    compresor: {
      activo: compresorActivo,
      threshold: parseFloat(thresholdInput.value),
      ratio: parseFloat(ratioInput.value),
      knee: parseFloat(kneeInput.value),
      attack: parseFloat(attackInput.value),
      release: parseFloat(releaseInput.value)
    },
    darkMode: document.body.classList.contains('dark-mode')
  };

  return confInterface;
}

export interface ConfiguracionInterface {
  volumen: number;
  filtrosDinamicos: FiltroDinamico[];
  compresor: {
    activo: boolean;
    threshold: number;
    ratio: number;
    knee: number;
    attack: number;
    release: number;
  };
  darkMode: boolean;
}