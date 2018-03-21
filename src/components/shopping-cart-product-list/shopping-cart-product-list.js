import React from 'react';

const ShoppingCartProductList = ({ children }) => {

  const products = React.Children.map(children, (product) => {
    return (
      <div className="col-sm-6 col-md-4 col-lg-3">
        {product}
      </div>
    );
  });

  return (
    <div className="py-5 bg-light" >
      <div className="container">
        <div className="row">
          {products}
        </div>
      </div>
    </div >
  );
}

export default ShoppingCartProductList;