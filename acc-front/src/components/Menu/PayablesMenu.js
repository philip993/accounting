import React from 'react';

// import React Router Dom
import { Link } from 'react-router-dom';
// Style
import './MenuStyle.scss';

const PayablesMenu = () => {
  return (
    <div className="menu">
      <h1>Payables</h1>
      <ul>
        <li>
          <h3>Lists</h3>
          <Link to="/payables/invoices" className="link">
            Posted Purchased Invoices
          </Link>
          <Link to="/payables/vendors" className="link">
            Vendors
          </Link>
        </li>
        <li>
          <h3>Reports</h3>
          <Link to="/payables/reports/vendor" className="link">
            Vendor Analytics
          </Link>
        </li>
        <li>
          <h3>Tasks</h3>
          <Link to="/payables/createinvoice" className="link">
            Purchase Invoice
          </Link>
          <Link to="/payables/createvendor" className="link">
            Vendor
          </Link>
        </li>
        <li>
          <h3>History</h3>
        </li>
      </ul>
    </div>
  );
};

export default PayablesMenu;
