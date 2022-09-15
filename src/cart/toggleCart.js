import get from '../getElement.js';

const closeCart = get('.cart-close');
const toggleCart = get('.toggle-cart');
const cartOverlay = get('.cart-overlay');

closeCart.addEventListener('click', () => {
  cartOverlay.classList.remove('show');
});
toggleCart.addEventListener('click', () => {
  cartOverlay.classList.add('show');
});

export const openCart = () => {
  cartOverlay.classList.add('show');
};
