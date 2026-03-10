/**
 * Script para el Portafolio de Isaac Garcia
 * Funcionalidad: Animación de entrada al hacer scroll
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Seleccionamos todos los elementos que queremos animar
  const scrollElements = document.querySelectorAll(
    ".project-card, .tech-box, h2",
  );

  // 2. Configuración del Intersection Observer
  // Este objeto "observa" cuándo un elemento entra en la pantalla
  const elementInView = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Añadimos la clase 'visible' cuando el elemento entra en el viewport
        entry.target.classList.add("visible");
      }
    });
  };

  const options = {
    threshold: 0.15, // El elemento debe estar visible al 15% para activarse
  };

  const observer = new IntersectionObserver(elementInView, options);

  // 3. Aplicamos el observador a cada elemento y preparamos el estilo inicial
  scrollElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
  });

  // 4. Inyectamos una clase CSS dinámica para la animación
  const style = document.createElement("style");
  style.innerHTML = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
  document.head.appendChild(style);

  console.log("Sistema de revelado activado 🚀");
});
