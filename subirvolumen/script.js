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
    
    }
}

function updateVolume() {
    document.getElementById('volume-level').textContent = `Volumen: ${volume}`;

    
    const water = document.querySelector('.water');
    const waterHeight = (volume / 10) * 100; 
    water.style.height = `${waterHeight}%`;
}

function animateWaterFall(direction) {
    const waterFall = document.querySelector('.water-fall');

    if (direction === 'increase') {
        waterFall.style.animation = 'waterFallEffect 0.5s ease-out forwards';

        setTimeout(() => {
            waterFall.style.animation = '';
        }, 500);
    }
}

document.getElementById('increase-button').addEventListener('click', increaseVolume);
document.getElementById('decrease-button').addEventListener('click', decreaseVolume);
