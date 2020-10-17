import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Style
import './CustomerStyle.scss';
// Moment
import Moment from 'react-moment';
// Accounting
import { formatMoney } from 'accounting';
// Redux Actions
import { requestGetOneCustomer } from './CustomerActions';
// Material Ui
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableFooter,
} from '@material-ui/core';

const CustomerHistory = () => {
  const { oneCustomer } = useSelector((state) => state.CustomerReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetOneCustomer());
  }, []);

  return (
    <div className="vendorHistory">
      {oneCustomer.map(
        ({
          customerName,
          saleinvoice,
          customerAddress,
          customerTaxNumber,
          customerBankAccount,
        }) => (
          <Table className="table">
            <TableHead className="tableHead">
              <TableRow className="tableRowInfo">
                <TableCell className="tableCell">INFO</TableCell>
              </TableRow>
              <TableRow className="tableRow">
                <TableCell className="tableCell">{customerName}</TableCell>
                <TableCell className="tableCell">{customerAddress}</TableCell>
                <TableCell className="tableCell">
                  {customerBankAccount}
                </TableCell>
                <TableCell className="tableCell">{customerTaxNumber}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tableBody">
              <TableRow className="tableRowHeader">
                <TableCell className="tableCell">Date</TableCell>
                <TableCell className="tableCell">Sales Invoice No.</TableCell>
                <TableCell className="tableCell">Amount</TableCell>
                <TableCell className="tableCell">Due Date</TableCell>
              </TableRow>
              {saleinvoice.map(
                ({
                  salesInvoiceDate,
                  salesInvoiceNumber,
                  salesInvoiceTotal,
                  salesInvoiceDue,
                }) => (
                  <TableRow className="tableRow">
                    <TableCell className="tableCell">
                      <Moment format="DD.MM.YYYY">{salesInvoiceDate}</Moment>
                    </TableCell>
                    <TableCell className="tableCell">
                      {salesInvoiceNumber}
                    </TableCell>
                    <TableCell className="tableCell">
                      {formatMoney(salesInvoiceTotal)} $
                    </TableCell>
                    <TableCell className="tableCell">
                      <Moment format="DD.MM.YYYY">{salesInvoiceDue}</Moment>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
            <TableFooter className="tableFooter">
              <TableRow className="tableRow">
                <TableCell className="tableCell" colSpan={2}>
                  Total
                </TableCell>
                <TableCell className="tableCell">
                  {formatMoney(
                    saleinvoice.reduce((a, b) => a + b.salesInvoiceDue, 0)
                  )}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        )
      )}
    </div>
  );
};

export default CustomerHistory;
