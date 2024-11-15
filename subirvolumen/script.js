let volume = 0;

function increaseVolume() {
    if (volume < 10) {
        volume++;
        updateVolume();
        animateWaterFall('increase');
    }
}

function decreaseVolume() {
    if (volume > 0) {
        volume--;
        updateVolume();
        // Al reducir el volumen, no se muestra el chorro de agua
    }
}

function updateVolume() {
    // Actualizar el texto del nivel de volumen
    document.getElementById('volume-level').textContent = `Volumen: ${volume}`;

    // Ajustar la altura del agua según el volumen
    const water = document.querySelector('.water');
    const waterHeight = (volume / 10) * 100; // Calculamos el porcentaje de altura (0% a 100%)
    water.style.height = `${waterHeight}%`;
}

function animateWaterFall(direction) {
    const waterFall = document.querySelector('.water-fall');

    if (direction === 'increase') {
        // Solo mostrar el chorro al incrementar el volumen
        waterFall.style.animation = 'waterFallEffect 0.5s ease-out forwards';

        // Resetear la animación del chorro después de que se haya completado
        setTimeout(() => {
            waterFall.style.animation = '';
        }, 500);
    }
}

// Vincular las funciones a los botones
document.getElementById('increase-button').addEventListener('click', increaseVolume);
document.getElementById('decrease-button').addEventListener('click', decreaseVolume);
