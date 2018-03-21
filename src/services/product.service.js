import productsData from './db';

const TIMEOUT = 100
const MAX_CHECKOUT = 2 // max different items

export default {
  getProducts() {
    return new Promise(resolve => {
      setTimeout(() => resolve(productsData), TIMEOUT);
    });
  },

  buyProducts(cart) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // if (Object.keys(cart.quantityById).length <= MAX_CHECKOUT)
        resolve(cart);
        // else
        // reject(`You can buy ${MAX_CHECKOUT} items at maximum in a checkout`);
      }, TIMEOUT);
    });
  }
};