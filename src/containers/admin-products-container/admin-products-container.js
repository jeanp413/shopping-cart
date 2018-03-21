import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions';
import { getVisibleProducts } from '../../reducers/products';
import AdminProductList from '../../components/admin-product-list/admin-product-list';

class AdminProductsContainer extends React.Component {
  render() {
    const { products, addToCart } = this.props;

    return (
      <AdminProductList products={products}>
      </AdminProductList>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminProductsContainer);