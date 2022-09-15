import addToCart from './cart/addToCart.js';
import get from './getElement.js';
import { formatPrice } from './utils.js';

const displayProduct = (storeItem, element, filter) => {
  element.innerHTML = storeItem
    .map(({ img, id, name, price }) => {
      return `<article class="product">
        <div class="product-container">
          <img src="${img}" alt="${name}" class="product-img img">
          <div class="product-icons">
            <a href="./product.html?id=${id}" class="product-icon">
              <i class="fas fa-search"></i>
            </a>
            <button class="product-cart-btn product-icon" data-id="${id}">
              <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
        <footer>
          <p class="product-name">${name}</p>
          <h4 class="product-price">${formatPrice(price)}</h4>
        </footer>
      </article>`;
    })
    .join('');

  if (filter) return;

  element.addEventListener('click', (e) => {
    const parent = e.target.parentElement;
    if (parent.classList.contains('product-cart-btn')) {
      addToCart(parent.dataset.id);
    }
  });
};
export default displayProduct;
