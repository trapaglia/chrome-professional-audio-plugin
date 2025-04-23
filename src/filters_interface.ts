import { setActiveFrequencyMarker, setActiveQMarker } from "./config.ts";

const MIN_FREQ = 20;    // 20 Hz
const MAX_FREQ = 20000; // 20 kHz
const OCTAVE_RANGE = Math.log2(MAX_FREQ / MIN_FREQ); // Aproximadamente 10 octavas

type Filtro = {
    id: string;
    freq: number;
    q: number;
    gain: number;
    bypass: boolean;
};

let filtrosActivos: Filtro[] = [];

document.addEventListener("DOMContentLoaded", () => {
    const botonAgregarFiltro = document.getElementById("agregar-filtro");
    if (!botonAgregarFiltro) {
        throw new Error("No se encontró el botón de agregar filtro");
    }
    botonAgregarFiltro.addEventListener("click", () => {
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
});

// Función para convertir valor del slider (0-100) a frecuencia (20-20000 Hz) en escala de octavas
function sliderToFreq(sliderValue: number) {
    // Convertir el valor del slider (0-100) a un valor en escala de octavas entre 20Hz y 20kHz
    return Math.round(MIN_FREQ * Math.pow(2, (sliderValue / 100) * OCTAVE_RANGE));
}

// Función para convertir frecuencia (20-20000 Hz) a valor del slider (0-100) en escala de octavas
function freqToSlider(freq: number) {
    // Convertir la frecuencia a un valor de slider (0-100) usando escala de octavas
    return Math.round((Math.log2(freq / MIN_FREQ) / OCTAVE_RANGE) * 100);
}

function crearFiltroCard(filtro: Filtro) {
    const contenedor = document.createElement("div");
    if (!contenedor) throw new Error("No se encontró el contenedor de filtros") ;
    contenedor.className = "filtro-card";
    contenedor.setAttribute("data-id", filtro.id);

    // Verificar si el modo oscuro está activo
    const isDarkMode = document.body.classList.contains('dark-mode');
    const bgColor = isDarkMode ? "#2a2a2a" : "#f5f5ff";
    const textColor = isDarkMode ? "#e0e0e0" : "#333";
    const buttonBgColor = isDarkMode ? "#4a2a2a" : "#ffdcdc";
    const buttonTextColor = isDarkMode ? "#e0e0e0" : "#333";
    
    // Actualizar el estilo con los colores apropiados
    contenedor.style.cssText = `padding: 7px; background: ${bgColor}; border-radius: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); display: flex; flex-direction: column; gap: 6px; position: relative; color: ${textColor};`;
    
    contenedor.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3px;">
            <label class="bypass-container" style="display: flex; align-items: center; margin: 0;">
                <input type="checkbox" class="bypass-checkbox" ${filtro.bypass ? 'checked' : ''}>
                <span style="margin-left: 5px; font-size: 0.85em;">Bypass</span>
            </label>
            <button class="eliminar" style="background: ${buttonBgColor}; color: ${buttonTextColor}; border: none; border-radius: 50%; width: 20px; height: 20px; font-weight: bold; cursor: pointer; font-size: 14px;">×</button>
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
    if (!freqSlider) throw new Error("No se encontró el slider de frecuencia");
    const freqValue = contenedor.querySelector(".freq-value");
    if (!freqValue) throw new Error("No se encontró el valor de frecuencia");
    freqSlider.addEventListener("input", (e) => {
        const target = e.currentTarget as HTMLInputElement;
        const frecuencia = sliderToFreq(parseFloat(target.value));
        freqValue.textContent = frecuencia.toString();
        filtro.freq = frecuencia;
        enviarActualizacion(filtro);
        guardarFiltros();
        setActiveFrequencyMarker(filtro.freq);
        setActiveQMarker(filtro.q);
    });

    freqSlider.addEventListener("mouseenter", () => {
        setActiveFrequencyMarker(filtro.freq);
        setActiveQMarker(filtro.q);
    });

    freqSlider.addEventListener("mouseleave", () => {
        setActiveFrequencyMarker(null);
        setActiveQMarker(null);
    });

    const qSlider = contenedor.querySelector(".q");
    if (!qSlider) throw new Error("No se encontró el slider de Q");
    const qValue = contenedor.querySelector(".q-value");
    if (!qValue) throw new Error("No se encontró el valor de Q");
    qSlider.addEventListener("input", (e) => {
        const target = e.currentTarget as HTMLInputElement;
        const q = parseFloat(target.value);
        qValue.textContent = q.toString();
        filtro.q = q;
        enviarActualizacion(filtro);
        guardarFiltros();
        setActiveQMarker(filtro.q);
    });

    qSlider.addEventListener("mouseenter", () => {
        setActiveFrequencyMarker(filtro.freq);
        setActiveQMarker(filtro.q);
    });

    qSlider.addEventListener("mouseleave", () => {
        setActiveFrequencyMarker(null);
        setActiveQMarker(null);
    });

    const gainSlider = contenedor.querySelector(".gain");
    if (!gainSlider) throw new Error("No se encontró el slider de gain");
    const gainValue = contenedor.querySelector(".gain-value");
    if (!gainValue) throw new Error("No se encontró el valor de gain");
    gainSlider.addEventListener("input", (e) => {
        const target = e.currentTarget as HTMLInputElement;
        const gain = parseFloat(target.value);
        gainValue.textContent = gain.toString();
        filtro.gain = gain;
        enviarActualizacion(filtro);
        guardarFiltros();
    });

    // Agregar evento para el checkbox de bypass
    const bypassCheckbox = contenedor.querySelector(".bypass-checkbox");
    if (!bypassCheckbox) throw new Error("No se encontró el checkbox de bypass");
    bypassCheckbox.addEventListener("change", (e) => {
        const target = e.currentTarget as HTMLInputElement;
        filtro.bypass = target.checked;
        enviarActualizacion(filtro);
        guardarFiltros();
    });

    const eliminarBtn = contenedor.querySelector(".eliminar");
    if (!eliminarBtn) throw new Error("No se encontró el botón de eliminar");
    eliminarBtn.addEventListener("click", async () => {
        contenedor.remove();
        filtrosActivos = filtrosActivos.filter(f => f.id !== filtro.id);
        const tabId = await getActiveTabId();
        
        chrome.runtime.sendMessage({
            type: "eliminar-filtro-dinamico",
            filtroId: filtro.id,
            tabId: tabId
        });
        
        guardarFiltros();
        setActiveFrequencyMarker(null);
        setActiveQMarker(null);
    });

    const filtrosContainer = document.getElementById("filtros-container");
    if (!filtrosContainer) throw new Error("No se encontró el contenedor de filtros");
    filtrosContainer.appendChild(contenedor);

}

async function enviarActualizacion(filtro: Filtro) {
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
    observarCambiosTema();
}

// Función para actualizar los filtros cuando cambia el tema
export function actualizarEstiloFiltros() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    const filtroCards = document.querySelectorAll<HTMLElement>('.filtro-card');
    
    filtroCards.forEach(card => {
        const bgColor = isDarkMode ? "#2a2a2a" : "#f5f5ff";
        const textColor = isDarkMode ? "#e0e0e0" : "#333";
        
        card.style.background = bgColor;
        card.style.color = textColor;
        
        const eliminarBtn = card.querySelector<HTMLElement>('.eliminar');
        if (eliminarBtn) {
            eliminarBtn.style.background = isDarkMode ? "#4a2a2a" : "#ffdcdc";
            eliminarBtn.style.color = isDarkMode ? "#e0e0e0" : "#333";
        }
    });
}

// Observar cambios en el tema
function observarCambiosTema() {
    // Añadir event listener al checkbox de modo oscuro
    const darkModeCheckbox = document.getElementById('dark-mode');
    if (darkModeCheckbox) {
        darkModeCheckbox.addEventListener('change', actualizarEstiloFiltros);
    }
}

// to do: 
// 1. que cuando se desactive el audio, las barras caigan con gracia
// 2. hacer andar el volumen
// 3. ver porque no se carga el audio volumen cuando desactivo y reactivo el audio(pero si el slider)