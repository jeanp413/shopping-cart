import * as ActionTypes from '../constants/action-types';

export const requestProducts = () => ({
  type: ActionTypes.REQUEST_PRODUCTS
});

export const receiveProducts = (products) => ({
  type: ActionTypes.RECEIVE_PRODUCTS,
  products: products
});

export const addToCart = (productId, productQuantity) => ({
  type: ActionTypes.ADD_TO_CART,
  productId,
  productQuantity
});

export const removeFromCart = (productId, productQuantity) => ({
  type: ActionTypes.REMOVE_FROM_CART,
  productId,
  productQuantity
});

export const checkout = () => ({
  type: ActionTypes.CHECKOUT_REQUEST
});

export const checkoutSuccess = (cart) => ({
  type: ActionTypes.CHECKOUT_REQUEST_SUCCESS,
  cart
});

export const checkoutFailure = (error) => ({
  type: ActionTypes.CHECKOUT_REQUEST_FAILURE,
  error
});

export const adminDeleteProduct = (productId) => ({
  type: ActionTypes.ADMIN_DELETE_PRODUCT_REQUEST,
  productId
});

export const adminDeleteProductSuccess = () => ({
  type: ActionTypes.ADMIN_DELETE_PRODUCT_REQUEST_SUCCESS
});

export const adminCreateProduct = (product) => ({
  type: ActionTypes.ADMIN_CREATE_PRODUCT_REQUEST,
  product
});

export const adminCreateProductSuccess = () => ({
  type: ActionTypes.ADMIN_CREATE_PRODUCT_REQUEST_SUCCESS
});

export const adminEditProduct = (product) => ({
  type: ActionTypes.ADMIN_EDIT_PRODUCT_REQUEST,
  product
});

export const adminEditProductSuccess = () => ({
  type: ActionTypes.ADMIN_EDIT_PRODUCT_REQUEST_SUCCESS
});