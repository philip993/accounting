import React from 'react';

// Style
import './MenuStyle.scss';
// import React Router Dom
import { Link } from 'react-router-dom';

const ReceivablesMenu = () => {
  return (
    <div className="menu">
      <h1>Receivables</h1>
      <ul>
        <li>
          <h3>Lists</h3>
          <Link to="/receivables/salesinvoice" className="link">
            Posted Sales Invoices
          </Link>
          <Link to="/receivables/customers" className="link">
            Customers
          </Link>
        </li>
        <li>
          <h3>Reports</h3>
          <Link to="/receivables/reports/customer" className="link">
            Customer Analytics
          </Link>
        </li>
        <li>
          <h3>Tasks</h3>
          <Link to="/receivables/createsalesinvoice" className="link">
            Sales Invoice
          </Link>
          <Link to="/receivables/createcustomer" className="link">
            Customer
          </Link>
        </li>
        <li>
          <h3>History</h3>
        </li>
      </ul>
    </div>
  );
};

export default ReceivablesMenu;
