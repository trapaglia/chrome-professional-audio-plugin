document.addEventListener('DOMContentLoaded', () => {
  // Obtener referencias a los elementos del DOM
  const abrirBtn = document.getElementById("abrir");
  
  // Añadir evento al botón de abrir
  abrirBtn.addEventListener("click", () => {
    // Abrir la pestaña del ecualizador
    chrome.tabs.create({ url: 'ecualizador.html' });
    
    // Cerrar el popup
    window.close();
  });
});