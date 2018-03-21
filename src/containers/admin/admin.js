import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AdminHeader from '../../components/admin-header/admin-header';
import AdminNavPanel from '../../components/admin-nav-panel/admin-nav-panel';
import AdminProductsContainer from '../admin-products-container/admin-products-container';
import AdminProductFormContainer from '../admin-product-form-container/admin-product-form-container';
import './admin.css';

class Admin extends React.Component {

  render() {
    const { match } = this.props;

    return (
      <div className="admin-page d-flex">
        <AdminHeader />
        <div className="row col admin-body">
          <AdminNavPanel />
          <main className="admin-main d-flex">

            <Switch>
              <Redirect exact from={match.url} to={`${match.url}/products`} />
              <Route exact path={`${match.url}/products`} component={AdminProductsContainer} />
              <Route exact path={`${match.url}/products/newproduct`} component={AdminProductFormContainer} />
              <Route path={`${match.url}/products/:productId(\\d+)`} component={AdminProductFormContainer} />
            </Switch>
            {/* <AdminProductsContainer /> */}
          </main>
        </div>
      </div >
    );
  }

}

export default Admin;