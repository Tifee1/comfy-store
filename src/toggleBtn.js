import get from './getElement.js';

const closeBtn = get('.sidebar-close');
const sidebarOverlay = get('.sidebar-overlay');
const toggleNav = get('.toggle-nav');

toggleNav.addEventListener('click', () => {
  sidebarOverlay.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  sidebarOverlay.classList.remove('show');
});
