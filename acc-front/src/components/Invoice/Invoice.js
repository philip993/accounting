import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// React Router Dom
import { useHistory } from 'react-router-dom';
// Style
import './InvoiceStyle.scss';
// Accouting
import { formatMoney } from 'accounting';
// Redux Actions
import { requestGetAllInvoices, selectOneInvoice } from './InvoiceActions';
// Material Ui
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Button,
} from '@material-ui/core';

const Invoice = () => {
  const { allInvoices } = useSelector((state) => state.InvoiceReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(requestGetAllInvoices());
  }, []);

  const handleSelectInvoice = (e) => {
    dispatch(selectOneInvoice(e));
    history.push('/invoices/invoicedetails');
  };

  return (
    <div className="invoices">
      <h1>Invoices</h1>
      <Table className="table">
        <TableHead className="tableHead">
          <TableRow className="tableRow">
            <TableCell className="tableCell">#</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Vendor</TableCell>
            <TableCell className="tableCell">Invoice Number</TableCell>
            <TableCell className="tableCell">Total Amount</TableCell>

            <TableCell className="tableCell">Due Date</TableCell>
            <TableCell className="tableCell">Transactions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="tableBody">
          {allInvoices.map(
            ({
              invoiceId,
              vendor,
              invoiceNumber,
              invoiceTotal,
              invoiceDate,
              invoiceDue,
              invoices,
            }) => (
              <TableRow className="tableRow">
                <TableCell className="tableCell">{invoiceId}</TableCell>
                <TableCell className="tableCell">{invoiceDate}</TableCell>
                <TableCell className="tableCell">{vendor.vendorName}</TableCell>
                <TableCell className="tableCell">{invoiceNumber}</TableCell>
                <TableCell className="tableCell">
                  {formatMoney(invoiceTotal)}
                </TableCell>
                <TableCell className="tableCell">{invoiceDue}</TableCell>
                <TableCell className="tableCell">
                  <Button
                    onClick={handleSelectInvoice.bind(this, { invoiceId })}
                  >
                    details
                  </Button>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Invoice;
