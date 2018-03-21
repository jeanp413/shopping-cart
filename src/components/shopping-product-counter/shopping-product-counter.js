import React from 'react';
import { Button, Input, Label, FormGroup } from 'reactstrap';

class ShoppingProductCounter extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      value: "1"
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.stock === nextProps.stock) {
      return;
    }

    this.setState(
      { value: "1" },
      () => this.props.onQuantityChanged(+this.state.value)
    );
  }

  handleIncrement(e) {
    if (this.state.value >= this.props.stock) {
      return;
    }

    this.setState(
      (prevState, props) => ({
        value: Number(prevState.value) + 1
      }),
      () => this.props.onQuantityChanged(this.state.value)
    );
  };

  handleDecrement(e) {
    if (this.state.value <= 1) {
      return;
    }

    this.setState(
      (prevState, props) => ({
        value: Number(prevState.value) - 1
      }),
      () => this.props.onQuantityChanged(this.state.value)
    );
  };

  handleChange(e) {
    const newValue = e.target.value;
    if (!(newValue === '' || /^[0-9\b]+$/.test(newValue))) {
      return;
    }
    if (newValue !== '' && (newValue < 1 || newValue > this.props.stock)) {
      return;
    }

    this.setState(
      { value: newValue },
      () => {
        if (this.state.value !== '') {
          this.props.onQuantityChanged(+this.state.value);
        }
      }
    );
  };

  render() {
    const { id } = this.props;

    return (
      <FormGroup className="form-row justify-content-center">
        <div className="col-auto">
          <Label for={"productQtyInput" + id} size="sm">Qty: </Label>
        </div>
        <div className="col-6">
          {/* <Button className="btn-change-qty" onClick={this.handleDecrement} size="sm">–</Button> */}
          <Input id={"productQtyInput" + id} type="number" value={this.state.value} onChange={this.handleChange} bsSize="sm" />
          {/* <Button className="btn-change-qty" onClick={this.handleIncrement} size="sm">+</Button> */}
        </div>
      </FormGroup>
    )
  }
}

export default ShoppingProductCounter;