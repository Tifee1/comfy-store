import get from '../getElement.js';
import displayProduct from '../displayProducts.js';
import { formatPrice } from '../utils.js';

const priceFilter = (store) => {
  const inputPrice = get('.price-filter');
  const priceValue = get('.price-value');
  let maxPrice = store.map((item) => item.price);
  maxPrice = Math.max(...maxPrice);
  maxPrice = Math.ceil(maxPrice / 100);
  inputPrice.max = maxPrice;
  inputPrice.value = maxPrice;
  priceValue.innerHTML = ` Value: &#8358;${maxPrice}`;

  // input event listener

  inputPrice.addEventListener('input', (e) => {
    const range = parseInt(inputPrice.value);
    let newStore = store.filter((item) => item.price / 100 <= range);
    priceValue.innerHTML = ` Value: &#8358;${range}`;
    if (newStore.length < 1) {
      const products = get('.products-container');
      products.innerHTML = `<h3 class='filter-error'>sorry no products matched your search`;
      return;
    }
    displayProduct(newStore, get('.products-container'), true);
  });
};
export default priceFilter;
