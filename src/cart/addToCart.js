import { openCart } from './toggleCart.js';
import get from '../getElement.js';
import { formatPrice, setLocalStorage, getLocalStorage } from '../utils.js';
import { findProduct } from '../setUpStore.js';
import addToCartDom from './addToCartDom.js';

//  select elements
const cartItemCount = get('.cart-item-count');
const cartTotalAmount = get('.cart-total');
const cartItemsDOM = get('.cart-items');

let cart = getLocalStorage('cart');

const addToCart = (id) => {
  let item = cart.find((cartItem) => cartItem.id === id);
  if (!item) {
    let newCart = findProduct(id);
    newCart = { ...newCart, amount: 1 };
    cart = [...cart, newCart];
    addToCartDom(newCart);
  } else {
    const newAmount = increaseCartAmount(id);
    const itemAmountDOM = [
      ...cartItemsDOM.querySelectorAll('.cart-item-amount'),
    ];
    const individualAmount = itemAmountDOM.find(
      (item) => item.dataset.id === id
    );
    individualAmount.textContent = newAmount;
  }

  // set cart to local storage
  setLocalStorage('cart', cart);
  // add one to item count
  displayCartItemCount();

  // display cart total
  displayCartTotal();

  openCart();
};

function increaseCartAmount(id) {
  let newAmount;
  cart = cart.map((item) => {
    if (item.id === id) {
      newAmount = item.amount + 1;
      item = { ...item, amount: newAmount };
    }
    return item;
  });
  return newAmount;
}
function decreaseCartAmount(id) {
  let newAmount;
  cart = cart.map((item) => {
    if (item.id === id) {
      newAmount = item.amount - 1;
      item = { ...item, amount: newAmount };
    }
    return item;
  });
  return newAmount;
}

function displayCartItemCount() {
  const itemCount = cart.reduce((total, curr) => {
    return (total += curr.amount);
  }, 0);
  cartItemCount.textContent = itemCount;
}
function displayCartTotal() {
  const totalAmount = cart.reduce((total, curr) => {
    return (total += curr.price * curr.amount);
  }, 0);
  cartTotalAmount.textContent = `total: ${formatPrice(totalAmount)}`;
}
function displayCartItemsDom() {
  cart.forEach((item) => {
    addToCartDom(item);
  });
}

function setUpButtons() {
  cartItemsDOM.addEventListener('click', (e) => {
    const element = e.target;
    const elementId = element.dataset.id;
    const parent = e.target.parentElement;
    const parentId = parent.dataset.id;

    if (element.classList.contains('cart-item-remove-btn')) {
      cart = cart.filter((item) => item.id !== elementId);
      element.parentElement.parentElement.remove();
    }
    if (parent.classList.contains('cart-item-increase-btn')) {
      const newAmount = increaseCartAmount(parentId);
      parent.nextElementSibling.textContent = newAmount;
    }
    if (parent.classList.contains('cart-item-decrease-btn')) {
      const newAmount = decreaseCartAmount(parentId);
      if (newAmount === 0) {
        cart = cart.filter((item) => item.id !== parentId);
        parent.parentElement.parentElement.remove();
      } else {
        parent.previousElementSibling.textContent = newAmount;
      }
    }

    setLocalStorage('cart', cart);
    displayCartItemCount();
    displayCartTotal();
  });
}

const init = () => {
  // display number of item when initializing
  displayCartItemCount();
  // display total amount when initializing

  displayCartTotal();
  // display cart items when initializing
  displayCartItemsDom();

  // button functionality
  setUpButtons();
};
init();
export default addToCart;
