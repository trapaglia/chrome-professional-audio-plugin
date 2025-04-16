import { getActiveTabId, updateFrequencyMarker, updateQMarker } from "./popup.js";

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

function crearFiltroCard(filtro) {
    const contenedor = document.createElement("div");
    contenedor.className = "filtro-card";
    contenedor.style = "padding: 7px; background: #f5f5ff; border-radius: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); display: flex; flex-direction: column; gap: 6px; position: relative;";
    contenedor.setAttribute("data-id", filtro.id);

    contenedor.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
            <label class="bypass-container" style="display: flex; align-items: center; margin: 0;">
                <input type="checkbox" class="bypass-checkbox" ${filtro.bypass ? 'checked' : ''}>
                <span style="margin-left: 5px; font-size: 0.85em;">Bypass</span>
            </label>
            <button class="eliminar" style="background: #ffdcdc; border: none; border-radius: 50%; width: 24px; height: 24px; font-weight: bold; cursor: pointer;">×</button>
        </div>
        <label>Frecuencia (Hz) <span class="freq-value">1000</span>
        <input type="range" min="20" max="20000" step="10" value="1000" class="freq" style="width: 100%;">
        </label>
        <label>Q <span class="q-value">5</span>
        <input type="range" min="0.1" max="10" step="0.1" value="5" class="q" style="width: 100%;">
        </label>
        <label>Ganancia (dB) <span class="gain-value">0</span>
        <input type="range" min="-30" max="30" step="1" value="0" class="gain" style="width: 100%;">
        </label>
    `;

    // Actualizar los valores iniciales
    contenedor.querySelector(".freq").value = filtro.freq;
    contenedor.querySelector(".freq-value").textContent = filtro.freq;
    contenedor.querySelector(".q").value = filtro.q;
    contenedor.querySelector(".q-value").textContent = filtro.q;
    contenedor.querySelector(".gain").value = filtro.gain;
    contenedor.querySelector(".gain-value").textContent = filtro.gain;

    const freqSlider = contenedor.querySelector(".freq");
    freqSlider.addEventListener("input", (e) => {
        contenedor.querySelector(".freq-value").textContent = e.target.value;
        filtro.freq = parseFloat(e.target.value);
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