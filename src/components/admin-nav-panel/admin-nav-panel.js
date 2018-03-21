import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './admin-nav-panel.css';

const AdminNavPanel = (props) => {

  return (
    <nav className="admin-sidebar bg-light py-3">
      <Nav vertical>
        <NavItem>
          <NavLink href="#" active>Products</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Orders</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Cutstomers</NavLink>
        </NavItem>
      </Nav>
    </nav>
  );

};

export default AdminNavPanel;