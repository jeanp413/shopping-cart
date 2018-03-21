import React from 'react';
import { Navbar, NavbarBrand, NavLink } from 'reactstrap';

const AdminHeader = (props) => {

  return (
    <header>
      <Navbar tag="div" dark color="dark" fixed="top">
        <NavbarBrand tag="span" className="d-flex align-items-center">
          {/* <img src={logoImg} alt="" height="50px" /> */}
          <strong>Shopping Cart Admin</strong>
        </NavbarBrand>
        <NavLink href="#" className="font-weight-bold text-white">Sign out</NavLink>
      </Navbar>
    </header>
  );

};

export default AdminHeader;