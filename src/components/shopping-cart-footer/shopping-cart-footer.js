import React from 'react';
import './shopping-cart-footer.css';

const ShoppingCartFooter = (props) => {
  return (
    <footer className="shopping-cart-footer text-muted">
      <div className="container">
        <p className="float-right">
          <a href="#">Back to top</a>
        </p>
        <p>&copy; 2018 Shopping Cart. Checkout repository at <a href="#">Github</a></p>
      </div>
    </footer>
  );
}

export default ShoppingCartFooter;