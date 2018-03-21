import { combineReducers } from 'redux'
import { default as cart, getQuantity, getAddedIds } from './cart'
import { default as products, getProduct } from './products'

export const getCart = (state) => {
  return state.cart;
};

export const getCheckoutError = (state) => {
  return state.cart.checkoutStatus.error;
};

export const isCheckoutPending = (state) => {
  return state.cart.checkoutStatus.checkoutPending;
};

export const getTotal = (state) => {
  const { cart, products } = state;
  return getAddedIds(cart)
    .reduce(
      (total, id) => {
        return total + getProduct(products, id).price * getQuantity(cart, id);
      },
      0
    )
    .toFixed(2);
};

export const getCartProducts = (state) => {
  const { cart, products } = state;
  return getAddedIds(cart)
    .map(id => ({
      ...getProduct(products, id),
      quantity: getQuantity(cart, id)
    }));
};

export default combineReducers({
  cart,
  products
});