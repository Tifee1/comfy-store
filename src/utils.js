const allUrl = 'https://course-api.com/javascript-store-products';
const singleProductUrl =
  'https://course-api.com/javascript-store-single-product';

const setLocalStorage = (item, itemArr) => {
  localStorage.setItem(item, JSON.stringify(itemArr));
};
const getLocalStorage = (item) => {
  let storageItem = localStorage.getItem(item);
  if (storageItem) {
    storageItem = JSON.parse(storageItem);
  } else {
    storageItem = [];
  }
  return storageItem;
};

const formatPrice = (price) => {
  const formattedPrice = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(price / 100);
  return formattedPrice;
};

export {
  allUrl,
  singleProductUrl,
  setLocalStorage,
  getLocalStorage,
  formatPrice,
};
