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



















`   `