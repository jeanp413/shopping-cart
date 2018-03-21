import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Admin from '../admin/admin';
import ShoppingCart from '../shopping-cart/shopping-cart';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact path="/"
          component={ShoppingCart}
        />
        <Route
          path="/admin"
          component={Admin}
        />
      </Switch>
    );
  }
}

export default App;
