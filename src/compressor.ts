import { setCompresorActivo, getCompresorActivo, setCompresorParam, getCompresorParam, compresorActivo, compresorParams } from "./config.js";
import { guardarEstado, localEstado } from "./state_memory.js";

export type Compresor = {
    threshold: number;
    ratio: number;
    knee: number;
    attack: number;
    release: number;
}

// Función para inicializar los controles del compresor
export function inicializarCompresor() {
  const compresorActivoCheckbox = document.getElementById('compresor-activo') as HTMLInputElement;
  if (!compresorActivoCheckbox) throw new Error("No se encontró el checkbox de compresor activo");
  const threshold = document.getElementById('threshold') as HTMLInputElement;
  if (!threshold) throw new Error("No se encontró el slider de threshold");
  const ratio = document.getElementById('ratio') as HTMLInputElement;
  if (!ratio) throw new Error("No se encontró el slider de ratio");
  const knee = document.getElementById('knee') as HTMLInputElement;
  if (!knee) throw new Error("No se encontró el slider de knee");
  const attack = document.getElementById('attack') as HTMLInputElement;
  if (!attack) throw new Error("No se encontró el slider de attack");
  const release = document.getElementById('release') as HTMLInputElement;
  if (!release) throw new Error("No se encontró el slider de release");
  
  // Actualizar valores mostrados
  setCompresorParam('threshold', parseFloat(threshold.value));
  setCompresorParam('ratio', parseFloat(ratio.value));
  setCompresorParam('knee', parseFloat(knee.value));
  setCompresorParam('attack', parseFloat(attack.value));
  setCompresorParam('release', parseFloat(release.value));
  
  // Event listeners para cambios en los controles
  compresorActivoCheckbox.addEventListener('change', async function() {
    setCompresorActivo(this.checked);
    await enviarConfiguracionCompresor();
    guardarEstado();
  });
  
  threshold.addEventListener('input', async function() {
    actualizarValorCompresor('threshold', parseFloat(this.value));
    setCompresorParam('threshold', parseFloat(this.value));
    await enviarConfiguracionCompresor();
    guardarEstado();
  });
  
  ratio.addEventListener('input', async function() {
    actualizarValorCompresor('ratio', parseFloat(this.value));
    setCompresorParam('ratio', parseFloat(this.value));
    await enviarConfiguracionCompresor();
    guardarEstado();
  });
  
  knee.addEventListener('input', async function() {
    actualizarValorCompresor('knee', parseFloat(this.value));
    setCompresorParam('knee', parseFloat(this.value));
    await enviarConfiguracionCompresor();
    guardarEstado();
  });
  
  attack.addEventListener('input', async function() {
    actualizarValorCompresor('attack', parseFloat(this.value));
    setCompresorParam('attack', parseFloat(this.value));
    await enviarConfiguracionCompresor();
    guardarEstado();
  });
  
  release.addEventListener('input', async function() {
    actualizarValorCompresor('release', parseFloat(this.value));
    setCompresorParam('release', parseFloat(this.value));
    await enviarConfiguracionCompresor();
    guardarEstado();
  });
}

// Función para actualizar los valores mostrados del compresor
export function actualizarValorCompresor(tipo: keyof Compresor, valor: number) {
  const valorElement = document.getElementById(`${tipo}-value`) as HTMLElement;
  
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
      const attackMs = (valor * 1000).toFixed(0);
      valorElement.textContent = `${attackMs} ms`;
      break;
    case 'release':
      // Convertir a milisegundos para mejor legibilidad
      const releaseMs = (valor * 1000).toFixed(0);
      valorElement.textContent = `${releaseMs} ms`;
      break;
  }
}

// Función para enviar la configuración del compresor al script offscreen
async function enviarConfiguracionCompresor() {
  if (localEstado.capturingAudio) {
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
