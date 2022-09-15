import { allUrl, setLocalStorage, getLocalStorage } from './utils.js';

const exchangeRate = 428;

let store = getLocalStorage('store');

const setUpStore = async (products) => {
  store = products.map((product) => {
    const { id, fields } = product;
    const { company, name, price: dprice, image, featured } = fields;
    const img = image[0].thumbnails.large.url;
    return {
      id,
      company,
      name,
      price: dprice * exchangeRate,
      img,
      featured,
    };
  });
  setLocalStorage('store', store);
};

const findProduct = (id) => {
  const newCart = store.find((product) => product.id === id);
  return newCart;
};

export { setUpStore, store, exchangeRate, findProduct };
