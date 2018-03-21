import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions';
import { getProduct, getNewProduct } from '../../reducers/products';
import AdminProductForm from '../../components/admin-product-form/admin-product-form';

const AdminProductFormContainer = ({ product, ...props }) => {

  return (
    <AdminProductForm product={product} {...props} >
    </AdminProductForm>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    product: getProduct(state.products, ownProps.match.params.productId) || getNewProduct()
  }
};

const mapDispatchToProps = {
  addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminProductFormContainer);