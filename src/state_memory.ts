import { getCompresorActivo, getCompresorParam, setCompresorActivo, setCompresorParam, staticFiltering, 
    filters
 } from "./config.js";
export let capturingAudio: boolean = false;
interface EstadoMods {
    capturingAudio: boolean;
    darkMode: boolean;
    compresor: {
        activo: boolean;
        threshold: number;
        ratio: number;
        knee: number;
        attack: number;
        release: number;
    };
    gainAudio: number;
};


// Función para cargar el estado guardado
export function cargarEstado() {
  chrome.storage.local.get("estado", function(data) {
    if (data.estado) {
      const estado = data.estado as EstadoMods;
      
      // Cargar volumen
      if (estado.gainAudio !== undefined) {
        const volumen = document.getElementById("volumen") as HTMLInputElement;
        if (!volumen) throw new Error("No se encontró el slider de volumen");
        volumen.value = estado.gainAudio.toString();
        const volumen_value = document.getElementById("volumen-value");
        if (!volumen_value) throw new Error("No se encontró el valor de volumen");
        volumen_value.textContent = `${estado.gainAudio} dB`;
      }
      
      // Cargar modo oscuro
      if (estado.darkMode !== undefined) {
        if (estado.darkMode) {
          document.body.classList.add('dark-mode');
          const dark_mode_enabled = document.getElementById('dark-mode') as HTMLInputElement;
          if (!dark_mode_enabled) throw new Error("No se encontró el checkbox de modo oscuro");
          dark_mode_enabled.checked = true;
        } else {
          document.body.classList.remove('dark-mode');
          const dark_mode_enabled = document.getElementById('dark-mode') as HTMLInputElement;
          if (!dark_mode_enabled) throw new Error("No se encontró el checkbox de modo oscuro");
          dark_mode_enabled.checked = false;
        }
      }
      
      // Cargar configuración del compresor
      if (estado.compresor) {
        const compresor_activo = document.getElementById('compresor-activo') as HTMLInputElement;
        if (!compresor_activo) throw new Error("No se encontró el checkbox de compresor activo");
        compresor_activo.checked = estado.compresor.activo;
        setCompresorActivo(estado.compresor.activo);
        
        if (estado.compresor.threshold !== undefined) {
          const threshold = document.getElementById('threshold') as HTMLInputElement;
          if (!threshold) throw new Error("No se encontró el slider de threshold");
          threshold.value = estado.compresor.threshold.toString();
          setCompresorParam('threshold', parseFloat(threshold.value));
        }
        
        if (estado.compresor.ratio !== undefined) {
          const ratio = document.getElementById('ratio') as HTMLInputElement;
          if (!ratio) throw new Error("No se encontró el slider de ratio");
          ratio.value = estado.compresor.ratio.toString();
          setCompresorParam('ratio', parseFloat(ratio.value));
        }
        
        if (estado.compresor.knee !== undefined) {
          const knee = document.getElementById('knee') as HTMLInputElement;
          if (!knee) throw new Error("No se encontró el slider de knee");
          knee.value = estado.compresor.knee.toString();
          setCompresorParam('knee', parseFloat(knee.value));
        }
        
        if (estado.compresor.attack !== undefined) {
          const attack = document.getElementById('attack') as HTMLInputElement;
          if (!attack) throw new Error("No se encontró el slider de attack");
          attack.value = estado.compresor.attack.toString();
          setCompresorParam('attack', parseFloat(attack.value));
        }
        
        if (estado.compresor.release !== undefined) {
          const release = document.getElementById('release') as HTMLInputElement;
          if (!release) throw new Error("No se encontró el slider de release");
          release.value = estado.compresor.release.toString();
          setCompresorParam('release', parseFloat(release.value));
        }
      }
    }
  });
}

// Guardar y restaurar estado de los 8 sliders + estado de audio
export function guardarEstado() {
  const volumen = document.getElementById("volumen") as HTMLInputElement;
  if (!volumen) throw new Error("No se encontró el slider de volumen");
  const estado: EstadoMods = { 
    capturingAudio: capturingAudio,
    darkMode: document.body.classList.contains('dark-mode'),
    compresor: {
      activo: getCompresorActivo(),
      threshold: getCompresorParam('threshold'),
      ratio: getCompresorParam('ratio'),
      knee: getCompresorParam('knee'),
      attack: getCompresorParam('attack'),
      release: getCompresorParam('release')
    },
    gainAudio: parseFloat(volumen.value)
  };
  chrome.storage.local.set(estado);
}