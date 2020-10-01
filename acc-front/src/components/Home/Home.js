import React from 'react';

// React Router Dom
import { Link } from 'react-router-dom';
// Style
import './HomeStyle.scss';
import {} from '@material-ui/core';

const Home = () => {
  return (
    <div className="home">
      <h1>Accounting</h1>
      <Link className="link" to="/general">
        General Ledgder
      </Link>
      <Link className="link" to="/receivables">
        Receivables
      </Link>
      <Link className="link" to="/payables">
        Payables
      </Link>
      <Link className="link" to="/humanresources">
        Human Resources
      </Link>
    </div>
  );
};

export default Home;
