let volume = 0;

function increaseVolume() {
    if (volume < 10) {
        volume++;
    } else {
        volume = 10;
    }

    // Actualizar el texto del nivel de volumen
    document.getElementById('volume-level').textContent = `Volumen: ${volume}`;

    // Obtener el contenedor del agua y ajustamos su altura
    const water = document.querySelector('.water');
    const waterFall = document.querySelector('.water-fall');

    // Empezar el chorro de agua (simulamos el flujo desde el grifo)
    waterFall.style.animation = 'waterFallEffect 0.5s ease-out forwards';

    // Aumentar la altura del agua según el volumen
    const waterHeight = (volume / 10) * 100; // Calculamos el porcentaje de altura (0% a 100%)
    water.style.height = `${waterHeight}%`;

    // Resetear la animación del chorro después de que se haya completado
    setTimeout(() => {
        waterFall.style.animation = '';
    }, 500);
}

