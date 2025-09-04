document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.mobile-menu-open');
  const menuClose = document.getElementById('mobile-menu-close');
  const menu = document.getElementById('mobile-menu');
  const menuLinks = menu.querySelectorAll('.menu-link');

  function openMenu() {
    menu.classList.add('menu-open');
    menu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('menu-open');
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  menuToggle.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});

function checkScreenWidth() {
  const screenWidth = window.innerWidth;
  const mobileMenu = document.querySelector('#mobile-menu');
  if (screenWidth >= 768 && mobileMenu.classList.contains('menu-open')) {
    mobileMenu.classList.remove('menu-open');
    document.body.style.overflow = '';
  }
}
window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);
