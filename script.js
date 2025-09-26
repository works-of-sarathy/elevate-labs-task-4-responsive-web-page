// Mobile menu toggle with accessibility improvements
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

function toggleMenu() {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !isExpanded);
  navMenu.classList.toggle('active');
}

// Toggle menu on click
menuToggle.addEventListener('click', toggleMenu);

// Toggle menu on keyboard (Enter or Space)
menuToggle.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleMenu();
  }
});

// Close nav menu if clicking outside
document.addEventListener('click', (event) => {
  if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
    navMenu.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

// Reset nav on window resize to prevent menu stuck open
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navMenu.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});
