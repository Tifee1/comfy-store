// global imports
import './src/toggleBtn.js';
import './src/cart/toggleCart.js';
import addToCart from './src/cart/addToCart.js';
import { setUpStore, store } from './src/setUpStore.js';

// specific imports
import fetchData from './src/fetchData.js';
import { allUrl } from './src/utils.js';
import displayProduct from './src/displayProducts.js';
import get from './src/getElement.js';

const loading = get('.section-loading');

async function init() {
  const products = await fetchData(allUrl);
  if (products) {
    loading.style.display = 'none';
    setUpStore(products);
    const featured = store.filter((product) => product.featured === true);
    displayProduct(featured, get('.featured-center'));
  }
}

window.addEventListener('DOMContentLoaded', init);
