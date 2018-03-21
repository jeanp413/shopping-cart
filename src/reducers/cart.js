import { combineReducers } from 'redux'
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_REQUEST_SUCCESS,
  CHECKOUT_REQUEST_FAILURE
} from '../constants/action-types';

const initialState = {
  checkoutStatus: {
    checkoutPending: false,
    error: null,
  },
  quantityById: {}
}

const checkoutStatus = (state = initialState.checkoutStatus, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return {
        checkoutPending: true,
        error: null
      };
    case CHECKOUT_REQUEST_SUCCESS:
      return initialState.checkoutStatus;
    case CHECKOUT_REQUEST_FAILURE:
      return {
        checkoutPending: false,
        error: action.error
      };
    default:
      return state;
  }
};

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST_SUCCESS:
      return initialState.quantityById;
    case ADD_TO_CART:
      {
        const { productId } = action;
        return {
          ...state,
          [productId]: (state[productId] || 0) + action.productQuantity
        };
      }
    case REMOVE_FROM_CART:
      {
        // const { productId } = action;
        // const { [action.productId]: deleted, ...newState } = state;
        let newState = Object.assign({}, state);
        delete newState[action.productId];
        return newState;
      }
    default:
      return state;
  }
};

export default combineReducers({
  checkoutStatus,
  quantityById
});

export const getQuantity = (state, productId) => (state.quantityById[productId] || 0);

export const getAddedIds = state => Object.keys(state.quantityById);