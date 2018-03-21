import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions';
import { getVisibleProducts } from '../../reducers/products';
import ShoppingCartProductList from '../../components/shopping-cart-product-list/shopping-cart-product-list';
import ShoppingCartProduct from '../../components/shopping-cart-product/shopping-cart-product';

class ShoppingCartProductsContainer extends React.Component {
  render() {
    const { products, addToCart } = this.props;

    return (
      <ShoppingCartProductList>
        {
          products.map(product => (
            <ShoppingCartProduct key={product.id} product={product} onAddToCartClicked={addToCart} />
          ))
        }
      </ShoppingCartProductList>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: getVisibleProducts(state.products)
  }
};

const mapDispatchToProps = {
  addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartProductsContainer);