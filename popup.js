document.getElementById("botoncito").addEventListener("click", () => {
  const mensajes = [
    "1Eres increíble, ¿lo sabías? 😘",
    // "Sigue creando, que el mundo necesita tu magia 💫",
    // "Tu mente es tan sexy como tu sonrisa 😳",
    // "Este plugin ya es perfecto porque tú lo hiciste ✨"
  ];

  const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
  document.getElementById("mensaje").textContent = mensaje;
});