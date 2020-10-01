import React from 'react';

// import React Router Dom
import { Link } from 'react-router-dom';

const GeneralMenu = () => {
  return (
    <div className="menu">
      <h1>General Ledger</h1>
      <ul>
        <li>
          Lists
          <ul>
            <li>
              <Link to="/general/chart">Chart of Accounts</Link>
            </li>
          </ul>
        </li>
        <li>
          Reports
          <ul>
            <li></li>
          </ul>
        </li>
        <li>
          History
          <ul>
            <li>
              <Link to="/general/journal">Journal</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default GeneralMenu;
