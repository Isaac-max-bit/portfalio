document.addEventListener("DOMContentLoaded", () => {
  // 1. Iniciar Estrellas
  const container = document.getElementById("stars-container");
  for (let i = 0; i < 150; i++) {
    const star = document.createElement("div");
    star.style.position = "absolute";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.width = Math.random() * 3 + "px";
    star.style.height = star.style.width;
    star.style.backgroundColor = "white";
    star.style.opacity = Math.random();
    star.style.borderRadius = "50%";
    container.appendChild(star);
  }

  // 2. Reloj del Footer
  const updateClock = () => {
    const now = new Date();
    const d = String(now.getDate()).padStart(2, "0");
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");
    const clock = document.getElementById("mission-clock");
    if (clock) clock.textContent = `${d}:${h}:${m}:${s}`;
  };
  setInterval(updateClock, 1000);
  updateClock();

  // 3. Animación de Barras de Progreso
  const barObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fills = entry.target.querySelectorAll(".fill");
          fills.forEach((fill) => {
            const targetWidth = fill.style.width;
            fill.style.width = "0";
            setTimeout(() => (fill.style.width = targetWidth), 200);
          });
        }
      });
    },
    { threshold: 0.5 },
  );

  const aboutSection = document.querySelector("#about");
  if (aboutSection) barObserver.observe(aboutSection);

  // 4. Simulador de Interferencia en Status
  const statusTxt = document.getElementById("status-text");
  setInterval(() => {
    if (Math.random() > 0.9) {
      statusTxt.textContent = "SIGNAL_LOST_...";
      statusTxt.style.color = "var(--nasa-red)";
      setTimeout(() => {
        statusTxt.textContent = "TRANSMISIÓN ACTIVA";
        statusTxt.style.color = "#00ff00";
      }, 200);
    }
  }, 4000);
});
