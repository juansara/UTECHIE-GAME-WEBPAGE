const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    // Remover la clase 'active' de todos los slides
    slides.forEach(slide => {
        slide.classList.remove('active')
    });

    // Añadir la clase 'active' al slide correspondiente
    slides[index].classList.add('active');
}

function nextSlide() {
    // Incrementar el índice del slide actual
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Mostrar el primer slide inicialmente
showSlide(currentSlide);

// Cambiar de slide cada 3 segundos
setInterval(nextSlide, 3000);