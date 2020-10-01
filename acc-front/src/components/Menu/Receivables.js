import React from 'react';

// import React Router Dom
import { Link } from 'react-router-dom';

const ReceivablesMenu = () => {
  return (
    <div className="menu">
      <h1>Receivables</h1>
      <ul>
        <li>
          Lists
          <ul>
            <li>
              <Link to="/receivables/invoices">Posted Sales Invoices</Link>
            </li>
            <li>
              <Link to="/receivables/customers">Customers</Link>
            </li>
          </ul>
        </li>
        <li>
          Task
          <ul>
            <li>
              <Link to="/receivables/createinvoice">Sales Invoice</Link>
            </li>
            <li>
              <Link to="/receivables/createcustomer">Customer</Link>
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

export default ReceivablesMenu;
