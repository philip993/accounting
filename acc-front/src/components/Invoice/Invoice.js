import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Invoice = () => {
  const { allInvoices } = useSelector((state) => state.InvoiceReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Invoices</h1>
    </div>
  );
};

export default Invoice;
