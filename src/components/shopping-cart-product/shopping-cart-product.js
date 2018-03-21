import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import ShoppingProductCounter from '../shopping-product-counter/shopping-product-counter';
import './shopping-cart-product.css';

class ShoppingCartProduct extends React.Component {

  constructor(props) {
    super(props);

    this.productQuantity = 1;

    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleQuantityChanged = this.handleQuantityChanged.bind(this);
  }

  handleAddToCart() {
    this.props.onAddToCartClicked(this.props.product.id, this.productQuantity);
  }

  handleQuantityChanged(quantity) {
    this.productQuantity = quantity;
  }

  render() {
    const { product } = this.props;

    return (
      <Card className="shopping-cart-product mb-4">
        <CardImg top src={product.image} alt={product.name} className="shopping-cart-product-img" />
        <CardBody>
          <CardTitle className="text-center">{product.name}</CardTitle>
          <p className="text-price text-center">{product.price.toFixed(2)}</p>
          <ShoppingProductCounter id={product.id} stock={product.stock} onQuantityChanged={this.handleQuantityChanged} />
          <Button color="primary" disabled={product.stock <= 0} block onClick={this.handleAddToCart}>
            {product.stock > 0 ? 'Add to cart' : 'Sold Out'}
          </Button>
        </CardBody>
      </Card>
    );
  }

};

export default ShoppingCartProduct;