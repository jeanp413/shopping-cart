import React from 'react';
import ShoppingCardHeaderContainer from '../shipping-cart-header-container/shopping-cart-header-container';
import ShoppingCardFooter from '../../components/shopping-cart-footer/shopping-cart-footer';
import ShoppingCartProductsContainer from '../shopping-cart-products-container/shopping-cart-products-container';
import './shopping-cart.css';

class ShoppingCart extends React.Component {

  render() {
    return (
      <div>
        <ShoppingCardHeaderContainer />
        <main role="main" className="shopping-cart-main">
          <ShoppingCartProductsContainer />
        </main>
        <ShoppingCardFooter />
      </div>
    );
  }

}

export default ShoppingCart;