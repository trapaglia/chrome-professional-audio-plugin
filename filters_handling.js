let filtrosActivos = [];

document.getElementById("agregar-filtro").addEventListener("click", () => {
const id = crypto.randomUUID();
const contenedor = document.createElement("div");
contenedor.className = "filtro-card";
contenedor.style = "padding: 10px; background: #f5f5ff; border-radius: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); display: flex; flex-direction: column; gap: 6px; position: relative;";
contenedor.setAttribute("data-id", id);

contenedor.innerHTML = `
    <label>Frecuencia (Hz) <span class="freq-value">1000</span>
    <input type="range" min="20" max="20000" step="10" value="1000" class="freq" style="width: 100%;">
    </label>
    <label>Q <span class="q-value">1</span>
    <input type="range" min="0.1" max="10" step="0.1" value="1" class="q" style="width: 100%;">
    </label>
    <label>Ganancia (dB) <span class="gain-value">0</span>
    <input type="range" min="-30" max="30" step="1" value="0" class="gain" style="width: 100%;">
    </label>
    <button class="eliminar" style="position: absolute; top: 8px; right: 8px; background: #ffdcdc; border: none; border-radius: 50%; width: 24px; height: 24px; font-weight: bold; cursor: pointer;">×</button>
`;

contenedor.querySelector(".freq").addEventListener("input", (e) => {
    contenedor.querySelector(".freq-value").textContent = e.target.value;
});

contenedor.querySelector(".q").addEventListener("input", (e) => {
    contenedor.querySelector(".q-value").textContent = e.target.value;
});

contenedor.querySelector(".gain").addEventListener("input", (e) => {
    contenedor.querySelector(".gain-value").textContent = e.target.value;
});

contenedor.querySelector(".eliminar").addEventListener("click", () => {
    contenedor.remove();
    filtrosActivos = filtrosActivos.filter(f => f.id !== id);
});

filtrosActivos.push({ id });
document.getElementById("filtros-container").appendChild(contenedor);
});
