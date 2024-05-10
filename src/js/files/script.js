// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

if (document.querySelector('.content-menu__button')) {
  document.addEventListener('click', function (e) {
    if (e.target.closest('.content-menu__button') || e.target.closest('.content-menu__button-fix')) {
      document.documentElement.classList.toggle('submenu-open');
    }
    if (
      (!e.target.closest('.navigation-menu') &&
        document.documentElement.classList.contains('submenu-open') &&
        !e.target.closest('.content-menu__button') &&
        !e.target.closest('.content-menu__button-fix')) ||
      (e.target.closest('.content-menu__wrapper') && document.documentElement.classList.contains('submenu-open'))
    ) {
      document.documentElement.classList.remove('submenu-open');
    }
  });
}

//=================================
