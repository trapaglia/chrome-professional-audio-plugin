import { dbToGain } from "./utils.ts";
import { ConfiguracionInterface } from "./interface.ts";
import { localEstado } from "./state_memory.ts";
import { compresorActivo, compresorParams } from "./config.ts";

// Función para enviar la configuración al offscreen
export async function enviarConfiguracionAlOffscreen(config: ConfiguracionInterface) {
  const tabId = await getActiveTabId();
  
  // Enviar configuración del volumen
  chrome.runtime.sendMessage({
    type: "ajustar-volumen",
    target: "offscreen",
    tabId,
    level: dbToGain(config.volumen)
  });
  
  // Enviar configuración del compresor
  await enviarConfiguracionCompresor();
}

// Función para enviar la configuración del compresor al script offscreen
export async function enviarConfiguracionCompresor() {
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