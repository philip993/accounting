import React from 'react';

// import React Router Dom
import { Link } from 'react-router-dom';
// Style
import './MenuStyle.scss';

const PaymentJournalMenu = () => {
  return (
    <div className="menu">
      <h1>Purchase Journal</h1>
      <ul>
        <li>
          <h3>Lists</h3>
          <Link to="/journal/list" className="link">
            Posted Bank Statement
          </Link>
        </li>
        <li>
          <h3>Reports</h3>
        </li>
        <li>
          <h3>Tasks</h3>
          <Link to="/journal/new" className="link">
            Open Journal
          </Link>
        </li>
        <li>
          <h3>History</h3>
        </li>
      </ul>
    </div>
  );
};

export default PaymentJournalMenu;
