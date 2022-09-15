import get from '../getElement.js';
import displayProduct from '../displayProducts.js';

const searchForm = get('.input-form');
const inputValue = get('.search-input');

const searchFilter = (store) => {
  searchForm.addEventListener('keyup', () => {
    const value = inputValue.value.toLowerCase();
    let newStore;
    if (!value) {
      newStore = store;
    } else {
      newStore = store.filter((product) =>
        product.name.toLowerCase().includes(value)
      );
      if (newStore.length < 1) {
        const products = get('.products-container');
        products.innerHTML = `
      <h3 class='filter-error'>sorry no products matched your search</h3>`;
        return;
      }
    }
    displayProduct(newStore, get('.products-container'), true);
  });
};

export default searchFilter;
