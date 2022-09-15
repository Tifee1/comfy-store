// global imports

import '../toggleBtn.js';
import '../cart/toggleCart.js';
import '../cart/addToCart.js';

// specific imports

import { singleProductUrl, formatPrice } from '../utils.js';
import get from '../getElement.js';
import { exchangeRate } from '../setUpStore.js';
import addToCart from '../cart/addToCart.js';

const loading = get('.page-loading');
const urlId = window.location.search;
let productID;

const productDOM = get('.single-product-center');
const productTitle = get('.single-product-title');
const productImg = get('.single-product-img');
const productPrice = get('.single-product-price');
const productColors = get('.single-product-colors');
const productDesc = get('.single-product-desc');
const productCompany = get('.single-product-company');
const title = get('.page-hero-title');
const addToCartBtn = get('.addToCartBtn');

const init = async () => {
  try {
    const response = await fetch(`${singleProductUrl}${urlId}`);
    if (response.status >= 200 && response.status <= 299) {
      const product = await response.json();
      const { id, fields } = product;
      const {
        name,
        price: dprice,
        image,
        colors,
        description,
        company,
      } = fields;
      const img = image[0].thumbnails.large.url;
      const price = dprice * exchangeRate;
      productID = id;

      document.title = `${name.toUpperCase()} || Comfy`;
      title.textContent = `home / ${name}`;
      productImg.src = img;
      productCompany.textContent = `by ${company}`;
      productDesc.textContent = description;
      productPrice.textContent = formatPrice(price);
      productTitle.textContent = name;

      productColors.innerHTML = colors
        .map((color) => {
          return `<span class='product-color' style="background-color:${color};"></span>`;
        })
        .join('');
    } else {
      console.log(response.status, response.statusText);
      productDOM.innerHTML = `<div>
     <h3 class='error'>sorry, something went wrong</h3>
     <a href='./index.html' class='btn'>back home</a>
     </div> `;
    }
  } catch (error) {
    console.log(error);
  }

  loading.style.display = 'none';
};

window.addEventListener('DOMContentLoaded', init);

addToCartBtn.addEventListener('click', () => {
  addToCart(productID);
});
