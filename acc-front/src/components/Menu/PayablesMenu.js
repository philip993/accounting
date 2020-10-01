import React from 'react';

// import React Router Dom
import { Link } from 'react-router-dom';

const PayablesMenu = () => {
  return (
    <div className="menu">
      <h1>Payables</h1>
      <ul>
        <li>
          Lists
          <ul>
            <li>
              <Link to="/payables/invoices">Posted Purchased Invoices</Link>
            </li>
            <li>
              <Link to="/payables/vendors">Vendors</Link>
            </li>
          </ul>
        </li>
        <li>
          Task
          <ul>
            <li>
              <Link to="/payables/createinvoice">Purchase Invoice</Link>
            </li>
            <li>
              <Link to="/payables/createvendor">Vendor</Link>
            </li>
          </ul>
        </li>
        <li>
          History
          <ul>
            <li></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default PayablesMenu;
