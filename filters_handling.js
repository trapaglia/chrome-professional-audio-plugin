import { getActiveTabId, updateFrequencyMarker, updateQMarker } from "./popup.js";
const MIN_FREQ = 20;    // 20 Hz
const MAX_FREQ = 20000; // 20 kHz
const OCTAVE_RANGE = Math.log2(MAX_FREQ / MIN_FREQ); // Aproximadamente 10 octavas

let filtrosActivos = [];

document.getElementById("agregar-filtro").addEventListener("click", () => {
    const id = crypto.randomUUID();
    const filtro = {
      id,
      freq: 1000,
      q: 5,
      gain: 0,
      bypass: false
    };
    crearFiltroCard(filtro);
    filtrosActivos.push(filtro);
    enviarActualizacion(filtro);
    guardarFiltros();
});

// Función para convertir valor del slider (0-100) a frecuencia (20-20000 Hz) en escala de octavas
function sliderToFreq(sliderValue) {
    // Convertir el valor del slider (0-100) a un valor en escala de octavas entre 20Hz y 20kHz
    return Math.round(MIN_FREQ * Math.pow(2, (sliderValue / 100) * OCTAVE_RANGE));
}

// Función para convertir frecuencia (20-20000 Hz) a valor del slider (0-100) en escala de octavas
function freqToSlider(freq) {
    // Convertir la frecuencia a un valor de slider (0-100) usando escala de octavas
    return Math.round((Math.log2(freq / MIN_FREQ) / OCTAVE_RANGE) * 100);
}

function crearFiltroCard(filtro) {
    const contenedor = document.createElement("div");
    contenedor.className = "filtro-card";
    contenedor.style = "padding: 7px; background: #f5f5ff; border-radius: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); display: flex; flex-direction: column; gap: 6px; position: relative;";
    contenedor.setAttribute("data-id", filtro.id);

    contenedor.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3px;">
            <label class="bypass-container" style="display: flex; align-items: center; margin: 0;">
                <input type="checkbox" class="bypass-checkbox" ${filtro.bypass ? 'checked' : ''}>
                <span style="margin-left: 5px; font-size: 0.85em;">Bypass</span>
            </label>
            <button class="eliminar" style="background: #ffdcdc; border: none; border-radius: 50%; width: 20px; height: 20px; font-weight: bold; cursor: pointer; font-size: 14px;">×</button>
        </div>
        <div style="display: grid; grid-template-columns: auto 1fr; grid-gap: 2px 8px; align-items: center; font-size: 0.9em;">
            <div>Freq (Hz)</div>
            <div style="display: flex; align-items: center;">
                <input type="range" min="0" max="100" step="1" value="${freqToSlider(filtro.freq)}" class="freq" style="flex: 1; margin: 0 5px 0 0;">
                <span class="freq-value" style="min-width: 40px; text-align: right;">${filtro.freq}</span>
            </div>
            
            <div>Q</div>
            <div style="display: flex; align-items: center;">
                <input type="range" min="0.1" max="10" step="0.1" value="${filtro.q}" class="q" style="flex: 1; margin: 0 5px 0 0;">
                <span class="q-value" style="min-width: 40px; text-align: right;">${filtro.q}</span>
            </div>
            
            <div>Gain (dB)</div>
            <div style="display: flex; align-items: center;">
                <input type="range" min="-30" max="30" step="1" value="${filtro.gain}" class="gain" style="flex: 1; margin: 0 5px 0 0;">
                <span class="gain-value" style="min-width: 40px; text-align: right;">${filtro.gain}</span>
            </div>
        </div>
    `;

    const freqSlider = contenedor.querySelector(".freq");
    freqSlider.addEventListener("input", (e) => {
        const frecuencia = sliderToFreq(parseFloat(e.target.value));
        contenedor.querySelector(".freq-value").textContent = frecuencia;
        filtro.freq = frecuencia;
        enviarActualizacion(filtro);
        guardarFiltros();
        updateFrequencyMarker(filtro.freq);
        updateQMarker(filtro.q);
    });

    freqSlider.addEventListener("mouseenter", () => {
        updateFrequencyMarker(filtro.freq);
        updateQMarker(filtro.q);
    });

    freqSlider.addEventListener("mouseleave", () => {
        updateFrequencyMarker(null);
        updateQMarker(null);
    });

    contenedor.querySelector(".q").addEventListener("input", (e) => {
        contenedor.querySelector(".q-value").textContent = e.target.value;
        filtro.q = parseFloat(e.target.value);
        enviarActualizacion(filtro);
        guardarFiltros();
        updateQMarker(filtro.q);
    });

    contenedor.querySelector(".q").addEventListener("mouseenter", () => {
        updateFrequencyMarker(filtro.freq);
        updateQMarker(filtro.q);
    });

    contenedor.querySelector(".q").addEventListener("mouseleave", () => {
        updateFrequencyMarker(null);
        updateQMarker(null);
    });

    contenedor.querySelector(".gain").addEventListener("input", (e) => {
        contenedor.querySelector(".gain-value").textContent = e.target.value;
        filtro.gain = parseFloat(e.target.value);
        enviarActualizacion(filtro);
        guardarFiltros();
    });

    // Agregar evento para el checkbox de bypass
    contenedor.querySelector(".bypass-checkbox").addEventListener("change", (e) => {
        filtro.bypass = e.target.checked;
        enviarActualizacion(filtro);
        guardarFiltros();
    });

    contenedor.querySelector(".eliminar").addEventListener("click", async () => {
        contenedor.remove();
        filtrosActivos = filtrosActivos.filter(f => f.id !== filtro.id);
        const tabId = await getActiveTabId();
        
        chrome.runtime.sendMessage({
            type: "eliminar-filtro-dinamico",
            filtroId: filtro.id,
            tabId: tabId
        });
        
        guardarFiltros();
        updateFrequencyMarker(null);
        updateQMarker(null);
    });

    document.getElementById("filtros-container").appendChild(contenedor);
}

async function enviarActualizacion(filtro) {
    chrome.runtime.sendMessage({
      type: "actualizar-filtro-dinamico",
      filtroId: filtro.id,
      freq: filtro.freq,
      q: filtro.q,
      gain: filtro.gain,
      bypass: filtro.bypass,
      tabId: await getActiveTabId()
    });
  }

function guardarFiltros() {
    chrome.storage.local.set({ filtrosDinamicos: filtrosActivos });
}

export function cargarFiltros() {
    chrome.storage.local.get("filtrosDinamicos", (data) => {
        if (Array.isArray(data.filtrosDinamicos)) {
            filtrosActivos = data.filtrosDinamicos;
            filtrosActivos.forEach(filtro => {
                // Asegurarse de que el filtro tenga la propiedad bypass
                if (filtro.bypass === undefined) {
                    filtro.bypass = false;
                }
                crearFiltroCard(filtro);
                enviarActualizacion(filtro);
            });
        }
    });
}

// to do: 
// 1. que cuando se desactive el audio, las barras caigan con gracia
// 2. hacer andar el volumen
// 3. ver porque no se carga el audio volumen cuando desactivo y reactivo el audio(pero si el slider)