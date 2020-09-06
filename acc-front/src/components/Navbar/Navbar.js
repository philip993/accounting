import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/chart">Chart Accounts</Link>
      <Link to="/journal">Journal</Link>
    </div>
  );
};

export default Navbar;
