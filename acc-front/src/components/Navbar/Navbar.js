import React from 'react';
import { Link } from 'react-router-dom';
// Style
import './NavbarStyle.scss';
// Material Ui
import { AppBar, Toolbar } from '@material-ui/core';

const Navbar = () => {
  return (
    <div className="navbar">
      <AppBar position="static" className="appBar">
        <Toolbar className="toolbar">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/chart" className="link">
            Chart Accounts
          </Link>
          <Link to="/journal" className="link">
            Journal
          </Link>
          <Link to="/vendors" className="link">
            Vendors
          </Link>
          <Link to="/createvendor" className="link">
            Vendor Form
          </Link>
          <Link to="/invoices" className="link">
            Invoices
          </Link>
          <Link to="/createinvoice" className="link">
            Invoice Form
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
