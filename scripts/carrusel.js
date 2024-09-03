const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const carouselImages = document.querySelector('.carousel-images');
const slides = document.querySelectorAll('.carousel-image');
let index = 0;
const intervalTime = 3000; // Intervalo de cambio automático en milisegundos
let interval;

// Función para mostrar una diapositiva específica
function showSlide(n) {
    if (n >= slides.length) index = 0;
    if (n < 0) index = slides.length - 1;
    carouselImages.style.transform = `translateX(-${index * 100}%)`;
}

// Función para avanzar a la siguiente diapositiva
function nextSlide() {
    index++;
    showSlide(index);
}

// Función para retroceder a la diapositiva anterior
function prevSlide() {
    index--;
    showSlide(index);
}

// Configura el intervalo para cambiar automáticamente la diapositiva
function startCarousel() {
    interval = setInterval(nextSlide, intervalTime);
}

// Inicia el carrusel automáticamente
startCarousel();

// Maneja los eventos de clic en los botones
prevButton.addEventListener('click', () => {
    prevSlide();
    resetInterval(); // Reinicia el intervalo cuando se hace clic
});

nextButton.addEventListener('click', () => {
    nextSlide();
    resetInterval(); // Reinicia el intervalo cuando se hace clic
});

// Reinicia el intervalo de cambio automático
function resetInterval() {
    clearInterval(interval);
    startCarousel();
}

// Muestra la primera diapositiva inicialmente
showSlide(index);
