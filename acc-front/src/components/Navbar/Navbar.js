import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/chart">Chart Accounts</Link>
      <Link to="/journal">Journal</Link>
      <Link to="/vendors">Vendors</Link>
      <Link to="/createvendor">Vendor Form</Link>
      <Link to="/invoices">Invoices</Link>
      <Link to="/createinvoice">Invoice Form</Link>
    </div>
  );
};

export default Navbar;
