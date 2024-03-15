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
        enterButton.classList.add('animate__animated', 'animate__bounceOut'); // Ajoute l'animation de changement de page
        setTimeout(() => {
            container.classList.add('animate__animated', 'animate__fadeOut'); // Ajoute l'animation de changement de page sur le conteneur
            setTimeout(() => {
                window.location.href = 'acceuil.html'; // Redirige vers la page d'accueil après la fin de l'animation
            }, 8000); // Attends 2 secondes avant de rediriger
        }, 8500); // Attends 2.5 secondes avant de lancer l'animation sur le conteneur
    });