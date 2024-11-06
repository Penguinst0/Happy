document.getElementById('show-message').addEventListener('click', function() {
    // Hide sparkles
    document.querySelectorAll('.sparkle').forEach(sparkle => {
        sparkle.style.display = 'none';
    });

    // Show stars
    for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 70 + 10}%`;
        star.style.left = `${Math.random() * 70 + 10}%`;
        star.style.animationDelay = `${i * 0.1}s`; // Delay for each star
        document.body.appendChild(star);
    }

    // Show balloons
    for (let i = 0; i < 15; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.top = `${Math.random() * 60 + 30}%`; // Start position
        balloon.style.left = `${Math.random() * 70 + 10}%`; // Random horizontal position
        document.body.appendChild(balloon);
    }

    // Show hidden message
    const message = document.getElementById('message');
    message.style.opacity = '1';
    message.style.transform = 'scale(1)';
});
