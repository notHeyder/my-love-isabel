// Carrusel automático con las imágenes ya en el HTML
const images = document.querySelectorAll('.gallery img');
let currentIndex = 0;
let intervalId;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

// Iniciar carrusel cada 3 segundos
intervalId = setInterval(showNextImage, 3000);

// Pausar al pasar el mouse
const gallery = document.getElementById('gallery');
gallery.addEventListener('mouseenter', () => {
    clearInterval(intervalId);
});
gallery.addEventListener('mouseleave', () => {
    intervalId = setInterval(showNextImage, 3000);
});

// Función para crear corazones flotando
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's'; // Duración aleatoria entre 4-7s
    heart.style.width = (Math.random() * 10 + 10) + 'px'; // Tamaño aleatorio
    heart.style.height = heart.style.width;
    document.getElementById('hearts-container').appendChild(heart);
    
    // Remover el corazón después de la animación
    setTimeout(() => {
        heart.remove();
    }, 7000);
}

// Crear corazones cada 1-2 segundos
setInterval(createHeart, Math.random() * 1000 + 1000);

// Función para el reloj
function updateClock() {
    const now = new Date();
    const startDate = new Date('2024-03-11'); // Fecha de conocimiento: 11/3/2024
    const diffTime = now - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Días transcurridos
    
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    document.getElementById('clock').innerHTML = `Días juntos: ${diffDays} | Hora actual: ${hours}:${minutes}`;
}

// Actualizar reloj cada segundo
setInterval(updateClock, 1000);
updateClock(); // Llamar una vez al cargar