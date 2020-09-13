import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Redux Actions
import { requestGetAllInvoices } from './InvoiceActions';
// Material Ui
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@material-ui/core';

const Invoice = () => {
  const { allInvoices } = useSelector((state) => state.InvoiceReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    requestGetAllInvoices();
  }, []);

  return (
    <div className="invoices">
      <h1>Invoices</h1>
      <Table className="table">
        <TableHead className="tableHead">
          <TableRow className="tableRow">
            <TableCell className="tableCell">#</TableCell>
            <TableCell className="tableCell">Vendor</TableCell>
            <TableCell className="tableCell">Invoice Number</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Due Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Transactions</TableCell>
          </TableRow>
          <TableBody className="tableBody">
            {allInvoices.map(
              ({
                invoiceId,
                vendor,
                invoiceNumber,
                invoiceDate,
                invoiceDue,
                invoices,
              }) => (
                <TableRow className="tableRow">
                  <TableCell className="tableCell">{invoiceId}</TableCell>
                  <TableCell className="tableCell">{vendor}</TableCell>
                  <TableCell className="tableCell">{invoiceNumber}</TableCell>
                  <TableCell className="tableCell">{invoiceDate}</TableCell>
                  <TableCell className="tableCell">{invoiceDue}</TableCell>
                  <TableCell className="tableCell"># transactions</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </TableHead>
      </Table>
    </div>
  );
};

export default Invoice;
