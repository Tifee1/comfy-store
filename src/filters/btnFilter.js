import get from '../getElement.js';
import displayProduct from '../displayProducts.js';

const btnFilter = (store) => {
  const companyDOM = get('.company');
  const companies = ['all', ...new Set(store.map((item) => item.company))];
  companyDOM.innerHTML = companies
    .map((company) => {
      return `<button class="company-btn">${company}</button>`;
    })
    .join('');

  companyDOM.addEventListener('click', (e) => {
    if (e.target.classList.contains('company-btn')) {
      const company = e.target.textContent;
      let newStore;
      if (company === 'all') {
        newStore = [...store];
      } else {
        newStore = store.filter((item) => item.company === company);
      }
      displayProduct(newStore, get('.products-container'), true);
    }
  });
};

export default btnFilter;
