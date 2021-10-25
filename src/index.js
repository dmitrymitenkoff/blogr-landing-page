const navButton = document.querySelector('.navigation-button');

function toggleMenu() {
  const expanded = navButton.getAttribute('aria-expanded');
  navButton.setAttribute('aria-expanded', !expanded);
  const menu = navButton.nextElementSibling;
  menu.hidden = !menu.hidden;
}

navButton.addEventListener('click', toggleMenu);
