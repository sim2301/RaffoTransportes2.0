// AOS
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        once: true,  
        duration: 2500,
    });
});

// Incio Scroll
document.addEventListener("DOMContentLoaded", function() {
    const flecha = document.getElementById("scrollFlecha");
    flecha.addEventListener("click", function() {
        const scrollDuration = 10; // Duración del desplazamiento en milisegundos
        const start = window.scrollY;
        const end = window.scrollY + window.innerHeight;
        const distance = end - start;
        let startTime = null;

        function animateScroll(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / scrollDuration, 1); // Normaliza el progreso entre 0 y 1
            window.scrollTo(0, start + distance * progress);

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        }

        requestAnimationFrame(animateScroll);
    });
});

// Menu
document.addEventListener("DOMContentLoaded", function() {
    const btnMenu = document.getElementById("btn-menu");
    const menu = document.querySelector(".menu");
    const iconBars = document.querySelector(".fa-bars");
    const iconTimes = document.querySelector(".fa-times");
    const label = document.querySelector("label");

    btnMenu.addEventListener("change", function() {
        if (this.checked) {
            menu.classList.add("active");
            iconBars.style.display = "none";
            iconTimes.style.display = "block";
        } else {
            menu.classList.remove("active");
            iconBars.style.display = "block";
            iconTimes.style.display = "none";
        }
    });

    menu.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            btnMenu.checked = false;
            menu.classList.remove("active");
            iconBars.style.display = "block";
            iconTimes.style.display = "none";
        }
    });

    document.addEventListener("click", function(event) {
        if (btnMenu.checked && !menu.contains(event.target) && event.target !== btnMenu && event.target !== label) {
            btnMenu.checked = false;
            menu.classList.remove("active");
            iconBars.style.display = "block";
            iconTimes.style.display = "none";
        }
    });
});

//Clientes
const track = document.querySelector('.empresas');

track.addEventListener('mouseover', () => {
    track.style.animationPlayState = 'paused'; // Pausa la animación
});

track.addEventListener('mouseout', () => {
    track.style.animationPlayState = 'running'; // Reanuda la animación
});