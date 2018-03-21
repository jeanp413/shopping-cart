import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects';
import * as actions from '../actions';
import * as actionTypes from '../constants/action-types';
import { getCart } from '../reducers';
import productService from '../services/product.service';

function* requestProducts() {
  const products = yield call(productService.getProducts);
  yield put(actions.receiveProducts(products));
}

function* watchGetProducts() {
  while (true) {
    yield take(actionTypes.REQUEST_PRODUCTS);
    yield call(requestProducts);
  }
}

function* checkout() {
  try {
    const cart = yield select(getCart);
    yield call(productService.buyProducts, cart);
    yield put(actions.checkoutSuccess(cart));
  }
  catch (error) {
    yield put(actions.checkoutFailure(error));
  }
}

function* watchCheckout() {
  while (true) {
    yield take(actionTypes.CHECKOUT_REQUEST);
    yield call(checkout);
  }
}

function* watchAndLog() {
  while (true) {
    const action = yield take('*')
    const state = yield select()

    console.log('action', action)
    console.log('state after', state)
  }
}

export default function* root() {
  yield all([fork(requestProducts), fork(watchGetProducts), fork(watchCheckout), fork(watchAndLog)]);
}