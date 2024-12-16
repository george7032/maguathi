// Ensure query selectors match your HTML structure
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinksAnchors = document.querySelectorAll('.nav-links a');

// Toggle Navigation Menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('open');
});

// Close Navigation Menu on Link Click (Small Screens)
navLinksAnchors.forEach((link) => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('open');
        }
    });
});\



















//prayer grid

const players = [
    { name: 'Player 1', position: 'Goalkeeper', number: 1, description: 'A strong presence in front of the net.' },
    { name: 'Player 2', position: 'Defender', number: 2, description: 'Solid in defense.' },
    { name: 'Player 3', position: 'Midfielder', number: 8, description: 'A midfield maestro, controlling the game.' },
    { name: 'Player 4', position: 'Goalkeeper', number: 1, description: 'Reliable in front of the net.' },
    { name: 'Player 5', position: 'Defender', number: 2, description: 'Strong defense to prevent goals.' },
    { name: 'Player 6', position: 'Midfielder', number: 8, description: 'Key player in the midfield, distributing the ball.' },
    // Add more players as needed
];

const playersContainer = document.querySelector('.players-grid');

players.forEach(player => {
    const playerCard = document.createElement('div');
    playerCard.classList.add('player');
    playerCard.innerHTML = `
        <img src="../images/player1.jpg" alt="Image of ${player.name}">
        <h3>${player.name}</h3>
        <p>Position: ${player.position}</p>
        <p>Jersey Number: ${player.number}</p>
        <p>${player.description}</p>
    `;
    playersContainer.appendChild(playerCard);
});

