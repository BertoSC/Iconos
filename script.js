function startDownload() {
    const arrow = document.querySelector('.download-arrow');
    const message = document.getElementById('downloadMessage');

    arrow.classList.add('active'); 

    for (let i = 0; i < 50; i++) {
        const piece = document.createElement('div');
        piece.classList.add('piece');
        piece.style.setProperty('--x', `${Math.random() * 200 - 100}px`);
        piece.style.setProperty('--y', `${Math.random() * 200 - 100}px`);
        arrow.appendChild(piece);

        
        setTimeout(() => {
            piece.remove();
        }, 500);
    }

    setTimeout(() => {
        arrow.style.display = 'none';
        message.style.opacity = '1';
    }, 220);
}
