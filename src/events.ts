import { aplicarConfiguracion, obtenerConfiguracionActual } from "./interface.ts";
import { cargarListaPresets } from "./state_memory.ts";

// Función para inicializar los controles de presets
export function inicializarPresets() {
  const guardarPresetBtn : HTMLButtonElement = document.getElementById('guardar-preset') as HTMLButtonElement;
  const cargarPresetBtn : HTMLButtonElement = document.getElementById('cargar-preset') as HTMLButtonElement;
  const eliminarPresetBtn : HTMLButtonElement = document.getElementById('eliminar-preset') as HTMLButtonElement;
  const presetNameInput : HTMLInputElement = document.getElementById('preset-name') as HTMLInputElement;
  const presetSelect : HTMLSelectElement = document.getElementById('preset-select') as HTMLSelectElement;

  // Cargar presets existentes
  cargarListaPresets();

  // Evento para guardar preset
  guardarPresetBtn.addEventListener('click', () => {
    const nombrePreset = presetNameInput.value.trim();
    if (nombrePreset === '') {
      alert('Por favor, ingresa un nombre para el preset');
      return;
    }

    // Obtener configuración actual
    const configuracion = obtenerConfiguracionActual();
    
    // Guardar en storage
    chrome.storage.local.get(['presets'], (result) => {
      const presets = result.presets || {};
      presets[nombrePreset] = configuracion;
      
      chrome.storage.local.set({ presets }, () => {
        alert(`Preset "${nombrePreset}" guardado correctamente`);
        presetNameInput.value = '';
        cargarListaPresets();
      });
    });
  });

  // Evento para cargar preset
  cargarPresetBtn.addEventListener('click', () => {
    const nombrePreset = presetSelect.value;
    if (nombrePreset === '') {
      alert('Por favor, selecciona un preset para cargar');
      return;
    }

    chrome.storage.local.get(['presets'], (result) => {
      const presets = result.presets || {};
      const configuracion = presets[nombrePreset];
      
      if (configuracion) {
        aplicarConfiguracion(configuracion);
        console.log("Preset cargado:", configuracion);
        alert(`Preset "${nombrePreset}" cargado correctamente`);
      } else {
        alert(`Error: No se encontró el preset "${nombrePreset}"`);
      }
    });
  });

  // Evento para eliminar preset
  eliminarPresetBtn.addEventListener('click', () => {
    const nombrePreset = presetSelect.value;
    if (nombrePreset === '') {
      alert('Por favor, selecciona un preset para eliminar');
      return;
    }

    if (confirm(`¿Estás seguro de que deseas eliminar el preset "${nombrePreset}"?`)) {
      chrome.storage.local.get(['presets'], (result) => {
        const presets = result.presets || {};
        
        if (presets[nombrePreset]) {
          delete presets[nombrePreset];
          
          chrome.storage.local.set({ presets }, () => {
            alert(`Preset "${nombrePreset}" eliminado correctamente`);
            cargarListaPresets();
          });
        } else {
          alert(`Error: No se encontró el preset "${nombrePreset}"`);
        }
      });
    }
  });
}