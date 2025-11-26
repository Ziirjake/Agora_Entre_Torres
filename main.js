document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. FUNCIONALIDAD LIGHTBOX (Visor de Imágenes)
       ========================================= */
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close")[0];

    // Seleccionar todas las imágenes con la clase 'zoomable'
    const images = document.querySelectorAll('.zoomable');

    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
            document.body.style.overflow = "hidden"; // Evitar scroll de fondo
        });
    });

    // Cerrar con la X
    closeBtn.onclick = function() { 
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
    
    // Cerrar haciendo click fuera
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });


    /* =========================================
       2. EFECTOS VISUALES (Scroll Reveal)
       ========================================= */
    const reveals = document.querySelectorAll('.scroll-reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Activar al inicio


    /* =========================================
       3. SMOOTH SCROLL (Navegación Suave)
       ========================================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Compensar barra fija
                    behavior: 'smooth'
                });
            }
        });
    });

    /* =========================================
       4. NAVBAR (Cambio de color al bajar)
       ========================================= */
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(255, 255, 255, 0.98)";
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        } else {
            navbar.style.background = "rgba(255, 255, 255, 0.95)";
            navbar.style.boxShadow = "none";
        }
    });

});