// global imports

import '../toggleBtn.js';
import '../cart/toggleCart.js';
import '../cart/addToCart.js';

// specific imports
import get from '../getElement.js';
import displayProduct from '../displayProducts.js';
import { setUpStore, store } from '../setUpStore.js';

// filter imports
import searchFilter from '../filters/searchFilter.js';
import btnfilter from '../filters/btnFilter.js';
import priceFilter from '../filters/priceFilter.js';

const loading = get('.page-loading');

const init = () => {
  displayProduct(store, get('.products-container'));

  searchFilter(store);
  btnfilter(store);
  priceFilter(store);
  loading.style.display = 'none';
};

init();
