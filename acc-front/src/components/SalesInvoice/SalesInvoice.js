import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// React Router Dom
import { useHistory } from 'react-router-dom';
// Style
import './SalesInvoiceStyles.scss';
// Accounting
import { formatMoney } from 'accounting';
// Moment
import Moment from 'react-moment';
// Redux Actions
import {
  requestGetAllSalesInvoices,
  selectOneSalesInvoice,
} from './SalesInvoiceActions';
// Material Ui
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from '@material-ui/core';

export const SalesInvoice = () => {
  const { allSalesInvoice } = useSelector((state) => state.SalesInvoiceReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSelectInvoice = (e) => {
    dispatch(selectOneSalesInvoice(e));
    history.push('/receivables/salesinvoice/saledetails');
  };

  useEffect(() => {
    dispatch(requestGetAllSalesInvoices());
  }, []);

  return (
    <div className="salesInvoice">
      <h1>Sales Invoices</h1>
      <Table className="table">
        <TableHead className="tableHead">
          <TableRow className="tableRow">
            <TableCell className="tableCell">#</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Invoice Number</TableCell>
            <TableCell className="tableCell">Total Amount</TableCell>
            <TableCell className="tableCell">Due Date</TableCell>
            <TableCell className="tableCell">Transactions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="tableBody">
          {allSalesInvoice.map(
            ({
              salesInvoiceId,
              customer,
              salesInvoiceNumber,
              salesInvoiceTotal,
              salesInvoiceDate,
              salesInvoiceDue,
              salesinvoice,
            }) => (
              <TableRow className="tableRow">
                <TableCell className="tableCell">{salesInvoiceId}</TableCell>
                <TableCell className="tableCell">
                  <Moment format="DD.MM.yyyy">{salesInvoiceDate}</Moment>
                </TableCell>
                <TableCell className="tableCell">
                  {customer.customerName}
                </TableCell>
                <TableCell className="tableCell">
                  {salesInvoiceNumber}
                </TableCell>
                <TableCell className="tableCell">
                  {formatMoney(salesInvoiceTotal)}
                </TableCell>
                <TableCell className="tableCell">
                  {' '}
                  <Moment format="DD.MM.yyyy">{salesInvoiceDue}</Moment>
                </TableCell>
                <TableCell className="tableCell">
                  <Button
                    onClick={handleSelectInvoice.bind(this, { salesInvoiceId })}
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
