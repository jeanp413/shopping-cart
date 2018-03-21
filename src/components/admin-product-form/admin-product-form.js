import React from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './admin-product-form.css';

class AdminProductForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      product: { ...this.props.product }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.product === nextProps.product) {
      return;
    }

    this.setState({
      product: {
        ...nextProps.product
      }
    });
  }

  handleSubmit() {
    // const { product } = this.props;
    // this.props.onRemoveFromCartClicked(product.id, product.quantity);
  }

  handleChange(e) {
    const { id, value } = e.target;

    switch (id) {
      case 'price':
        if (!(value === '' || value >= 0)) {
          return;
        }
        break;

      case 'stock':
        if (!(value === '' || /^[0-9\b]+$/.test(value))) {
          return;
        }

        break;
    }

    this.setState({
      product: {
        ...this.state.product,
        [id]: value
      }
    });
  };

  render() {
    const { product } = this.state;

    return (
      <div className="d-flex flex-column col-8">
        <h2>{product.id ? 'Edit Product' : 'Add New Product'}</h2>
        <div className="d-flex flex-row">
          <div className="admin-product-form-img mr-3">
            <img src={product.image} alt={product.name} className="img-thumbnail" />
          </div>
          <div className="col-8">
            <Form onSubmit={e => e.preventDefault()}>
              <FormGroup>
                <Label for="name" >Product</Label>
                <Input type="text" value={product.name} id="name" placeholder="Enter your product name" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="image" >Image URL</Label>
                <Input type="url" value={product.image} id="image" placeholder="Enter your product image URL" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="price" >Price</Label>
                <Input type="number" value={product.price} id="price" placeholder="Enter your product price" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="stock" >Stock</Label>
                <Input type="number" value={product.stock} id="stock" placeholder="Enter your product stock" onChange={this.handleChange} />
              </FormGroup>
              <div className="text-right">
                <Button color="primary" className="mr-2" onClick={this.handleSubmit}>Submit</Button>
                <Link to={'/admin/products'} className="btn btn-danger">Cancel</Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }

};

export default AdminProductForm;