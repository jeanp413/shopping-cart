import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';
import './admin-product-list.css';

const AdminProductListRow = ({ product }) => {

  return (
    <tr>
      <th scope="row">{product.id}</th>
      <td>
        <div className="d-flex flex-row align-items-center">
          <img src={product.image} alt={product.name} className="admin-product-img rounded" />
          <p className="ml-2">{product.name}</p>
        </div>
      </td>
      <td><span className="text-price">{product.price.toFixed(2)}</span></td>
      <td>{product.stock}</td>
      <td>
        <Link to={`/admin/products/${product.id}`} className="btn btn-warning btn-sm mr-2">Edit</Link>
        <Button color="danger" size="sm">Delete</Button>
      </td>
    </tr>
  );

};

const AdminProductList = ({ products }) => {

  const productRows = products.map((product) => {
    return (<AdminProductListRow key={product.id} product={product} />);
  });

  return (
    <div className="d-flex flex-column col">
      <div className="mb-3">
        <div className="d-flex flex-row justify-content-between">
          <h2>Products</h2>
          <div className="d-flex align-items-center">
            <Link to={'/admin/products/newproduct'} className="btn btn-primary btn-sm">Add Product</Link>
          </div>
        </div>
      </div>
      <Table hover className="admin-products-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Price</th>
            <th>Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productRows}
        </tbody>
      </Table>
    </div>
  );
}

export default AdminProductList;