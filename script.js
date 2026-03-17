document.addEventListener("DOMContentLoaded", () => {
    // 1. Iniciar Fondo Estelar Dinámico
    initStars();

    // 2. Observer para revelado de secciones
    const sections = document.querySelectorAll('.section-reveal');
    const revealOptions = { threshold: 0.1 };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, revealOptions);

    sections.forEach(section => revealObserver.observe(section));
});

function initStars() {
    const container = document.getElementById('stars-container');
    const starCount = 200;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 2 + 'px';
        star.style.height = star.style.width;
        star.style.backgroundColor = 'white';
        star.style.opacity = Math.random();
        container.appendChild(star);
    }
}