function startDownload() {
    const arrow = document.querySelector('.download-arrow');
    const message = document.getElementById('downloadMessage');

    arrow.classList.add('active'); // Oculta la flecha

    // Crea partículas de "desfragmentación"
    for (let i = 0; i < 50; i++) {
        const piece = document.createElement('div');
        piece.classList.add('piece');
        piece.style.setProperty('--x', `${Math.random() * 200 - 100}px`);
        piece.style.setProperty('--y', `${Math.random() * 200 - 100}px`);
        arrow.appendChild(piece);

        // Quita las partículas después de la animación
        setTimeout(() => {
            piece.remove();
        }, 500);
    }

    // Muestra el mensaje después de la animación
    setTimeout(() => {
        arrow.style.display = 'none';
        message.style.opacity = '1';
    }, 220);
}
