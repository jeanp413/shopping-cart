import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, checkout } from '../../actions';
import { getCartProducts, getTotal } from '../../reducers';
import ShoppingCartHeader from '../../components/shopping-cart-header/shopping-cart-header';

class ShoppingCartHeaderContainer extends React.Component {
  render() {
    const { cartProducts, cartTotalPrice, removeFromCart, checkout } = this.props;

    return (
      <ShoppingCartHeader cartProducts={cartProducts} cartTotalPrice={cartTotalPrice} removeFromCart={removeFromCart} checkout={checkout} />
    )
  }
}

const mapStateToProps = state => {
  return {
    cartProducts: getCartProducts(state),
    cartTotalPrice: getTotal(state)
  }
};

const mapDispatchToProps = {
  removeFromCart,
  checkout
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartHeaderContainer);