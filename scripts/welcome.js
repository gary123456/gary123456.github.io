const enterButton = document.getElementById('enter-button');
const container = document.querySelector('.container');

// Fonction pour l'animation au survol du bouton
enterButton.addEventListener('mouseenter', () => {
    enterButton.classList.add('animate__animated', 'animate__heartBeat'); // Augmente légèrement la taille au survol
});

// Fonction pour la taille normale lorsque le survol se termine
enterButton.addEventListener('mouseleave', () => {
    enterButton.classList.remove('animate__animated', 'animate__heartBeat'); // Redevient à la taille normale
});

// Fonction pour l'animation de changement de page au clic sur le bouton
enterButton.addEventListener('click', () => {
    // Ajoute l'animation de changement de page au bouton
    enterButton.classList.add('animate__animated', 'animate__bounceOut');

    // Ajoute l'animation de changement de page sur le conteneur avec un court délai
    setTimeout(() => {
        container.classList.add('animate__animated', 'animate__fadeOut');

        // Redirige vers la page d'accueil après la fin de l'animation sur le conteneur
        setTimeout(() => {
            window.location.href = 'accueil.html';
        }, 2000); // Attends 2 secondes (durée de l'animation fadeOut) avant de rediriger
    }, 500); // Commence l'animation de fadeOut sur le conteneur légèrement après l'animation du bouton
});
