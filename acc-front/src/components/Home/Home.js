import React from 'react';

// React Router Dom
import { Link } from 'react-router-dom';
// Style
import './HomeStyle.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="one">
        <h1>Accounting App</h1>
      </div>
      <div className="two">
        <Link className="link" to="/general">
          General Ledgder
        </Link>
        <Link className="link" to="/hr">
          Human Resources
        </Link>
      </div>
      <div className="three">
        <Link className="link" to="/receivables">
          Receivables
        </Link>
        <Link className="link" to="/payables">
          Payables
        </Link>
      </div>
      <div className="four">
        <Link className="link" to="/journal">
          Payment Journal
        </Link>
      </div>
    </div>
  );
};

export default Home;
