const button = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu-list');
const dropDownButtons = document.querySelectorAll('.dropdown__title');
const carets = document.querySelectorAll('.caret');

menu.classList.add('hidden');

// Toggle menu open/close
function toggleMenu(status) {
  if (status === 'false') {
    menu.classList.remove('hidden');
    menu.classList.add('grid');
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('aria-label', 'Close the menu');
  } else {
    menu.classList.add('hidden');
    menu.classList.remove('grid');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open the menu');
  }
}

button.addEventListener('click', event => {
  const status = button.getAttribute('aria-expanded');
  toggleMenu(status);
});

dropDownButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded');
    btn.setAttribute('aria-expanded', !expanded);
    const c = btn.firstElementChild;
    c.classList.toggle('close');
    const subMenu = btn.nextElementSibling;
    subMenu.hidden = !subMenu.hidden;
  });
});
