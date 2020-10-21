import React from 'react';

// Style
import './MenuStyle.scss';
// import React Router Dom
import { Link } from 'react-router-dom';

const GeneralMenu = () => {
  return (
    <div className="menu">
      <h1>General Ledger</h1>
      <ul>
        <li>
          <h3>Lists</h3>
          <Link to="/general/chart" className="link">
            Chart of Accounts
          </Link>
        </li>
        <li>
          <h3>Reports</h3>
          <Link to="/general/reports/account" className="link">
            Details Account Report
          </Link>
        </li>
        <li>
          <h3>Tasks</h3>
        </li>
        <li>
          <h3>History</h3>
          <Link to="/general/journal" className="link">
            Journal
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default GeneralMenu;
