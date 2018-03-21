import React from 'react';
import { ListGroup } from 'reactstrap';
import './cart-product-list.css';

const CartProductList = ({ children }) => {

  return (
    <ListGroup className="cart-product-list mb-3">
      {children}
    </ListGroup >
  );

}

export default CartProductList;