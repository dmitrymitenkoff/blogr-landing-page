const button = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu-list');

// Toggle menu open/close
function toggleMenu(status) {
  if (status === 'false') {
    menu.removeAttribute('hidden');
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('aria-label', 'Close the menu');
  } else {
    menu.setAttribute('hidden', 'hidden');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open the menu');
  }
}

button.addEventListener('click', event => {
  const status = button.getAttribute('aria-expanded');
  toggleMenu(status);
});
