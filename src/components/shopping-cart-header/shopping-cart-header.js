import React from 'react';
import { NavLink, Navbar, NavbarBrand, Popover, PopoverHeader, PopoverBody, Button } from 'reactstrap';
import CartProductList from '../cart-product-list/cart-product-list';
import CartProduct from '../cart-product/cart-product';
import logoImg from './logo.svg';
import cartImg from './cart.svg';
import './shopping-cart-header.css';

class ShoppingCartHeader extends React.Component {

  constructor(props) {
    super(props);

    this.toggleCart = this.toggleCart.bind(this);
    this.state = {
      popoverCartOpen: false
    };
  }

  toggleCart() {
    this.setState({
      popoverCartOpen: !this.state.popoverCartOpen
    });
  }

  render() {
    const { cartProducts, cartTotalPrice, removeFromCart, chekout } = this.props;

    const cartProductElements = cartProducts.map(product => (
      <CartProduct key={product.id} product={product} onRemoveFromCartClicked={removeFromCart} />
    ));

    return (
      <header>
        <Navbar tag="div" dark color="dark" fixed="top">
          <div className="container d-flex justify-content-between">
            <NavbarBrand tag="span" className="d-flex align-items-center">
              <img src={logoImg} alt="" height="50px" />
              <strong>Shopping Cart</strong>
            </NavbarBrand>

            <NavLink id="popoverCart" href="#" onClick={this.toggleCart}>
              {/* <Button color="link" className="font-weight-bold text-white border-0 px-0">Log out</Button> */}
              <img src={cartImg} alt="" height="30px" />
              <strong style={{ color: "white" }}>Cart</strong>
            </NavLink>

            <Popover className="cart-popover" placement="bottom" isOpen={this.state.popoverCartOpen} target="popoverCart" toggle={this.toggleCart}>
              <PopoverHeader className="text-center">Your Cart</PopoverHeader>
              <PopoverBody>
                <CartProductList>
                  {cartProductElements}
                </CartProductList>
                <p className="cart-total-price font-weight-bold text-right px-3">Total: <span className="text-price">{cartTotalPrice}</span></p>
                <Button color="success" disabled={cartProductElements.length <= 0} block onClick={chekout}>Checkout</Button>
              </PopoverBody>
            </Popover>
          </div>
        </Navbar>
      </header>
    );
  }
};

export default ShoppingCartHeader;