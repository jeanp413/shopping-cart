import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';
import './cart-product.css';

class CartProduct extends React.Component {

  constructor(props) {
    super(props);

    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

  handleRemoveFromCart() {
    const { product } = this.props;
    this.props.onRemoveFromCartClicked(product.id, product.quantity);
  }

  render() {
    const { product } = this.props;
    const productPartialTotalPrice = product.price * product.quantity;

    return (
      <ListGroupItem action className="cart-product-item d-flex flex-row align-items-center">
        <img src={product.image} alt={product.name} className="cart-product-img" />
        <div className="col">
          <p className="m-0">{product.name}</p>
          <p className="text-price m-0">{product.price.toFixed(2)}</p>
        </div>
        <div className="pr-2">
          <p className="m-0">Qty: <span>{product.quantity}</span></p>
          <p className="text-price m-0">{productPartialTotalPrice.toFixed(2)}</p>
        </div>
        <button type="button" className="close" aria-label="Remove from Cart" onClick={this.handleRemoveFromCart}><span aria-hidden="true">&times;</span></button>
      </ListGroupItem>
    );
  }

};

export default CartProduct;