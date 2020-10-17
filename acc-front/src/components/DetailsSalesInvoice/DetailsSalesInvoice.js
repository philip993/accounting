import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Style
import './DetailsSalesInvoiceStyle.scss';
// Accounting
import { formatMoney } from 'accounting';
// Moment
import Moment from 'react-moment';
// Redux Actions
import { requestGetSalesInvoiceDetails } from './DetailsSalesInvoiceActions';
// Material Ui
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableFooter,
} from '@material-ui/core';

const DetailsSalesInvoice = () => {
  const { oneSalesInvoice } = useSelector(
    (state) => state.DetailsSalesInvoiceReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetSalesInvoiceDetails());
  }, []);

  return (
    <div className="detailsSalesInvoice">
      {oneSalesInvoice.map(
        (
          {
            salesInvoiceId,
            salesInvoiceNumber,
            salesInvoiceDate,
            salesInvoiceTotal,
            salesInvoiceDue,
            salesinvoice,
            customer,
          },
          index
        ) => (
          <Table className="table">
            <TableHead className="cardContent">
              <TableRow className="tableRowInfo">
                <TableCell className="tableCell">Basic Information</TableCell>
              </TableRow>
              <TableRow className="tableRow">
                <TableCell className="tableCell" colSpan={20}>
                  Posted Sales Invoice No.
                </TableCell>
                <TableCell className="tableCell" colSpan={4}>
                  {salesInvoiceId}
                </TableCell>
              </TableRow>
              <TableRow className="tableRow">
                <TableCell className="tableCell" colSpan={20}>
                  Vendor: {customer.customerName}
                </TableCell>
                <TableCell className="tableCell">
                  Invoice No.: {salesInvoiceNumber}
                </TableCell>
              </TableRow>
              <TableRow className="tableRow">
                <TableCell className="tableCell" colSpan={20}>
                  Vendor Code: {customer.customerId}
                </TableCell>
                <TableCell className="tableCell">
                  DATE:<Moment format="DD.MM.YYYY">{salesInvoiceDate}</Moment>{' '}
                </TableCell>
              </TableRow>
              <TableRow className="tableRow">
                <TableCell className="tableCell" colSpan={20}>
                  Vendor Address: {customer.customerAddress}
                </TableCell>
                <TableCell className="tableCell">
                  DUE: <Moment format="DD.MM.YYYY">{salesInvoiceDue}</Moment>{' '}
                </TableCell>
              </TableRow>
              <TableRow className="tableRow">
                <TableCell className="tableCell" colSpan={20}>
                  Tax No.: {customer.customerTaxNumber}
                </TableCell>
                <TableCell className="tableCell"></TableCell>
              </TableRow>
              <TableRow className="tableRow">
                <TableCell className="tableCell" colSpan={20}>
                  Bank Account: {customer.customerBankAccount}
                </TableCell>
                <TableCell className="tableCell"></TableCell>
              </TableRow>
            </TableHead>
            <TableRow className="tableRowInfo">
              <TableCell className="tableCell">Lines</TableCell>
            </TableRow>
            <TableBody>
              {salesinvoice.map(
                (
                  {
                    transactionFK,
                    transactionDescription,
                    transactionDebit,
                    transactionCredit,
                  },
                  index
                ) => (
                  <TableRow className="tableRow">
                    <TableCell className="tableCell">
                      {transactionFK - 1}
                    </TableCell>
                    <TableCell className="tableCell" colSpan={14}>
                      {transactionDescription}
                    </TableCell>
                    <TableCell className="tableCell" colSpan={4}>
                      {formatMoney(transactionDebit)}
                    </TableCell>
                    <TableCell className="tableCell" colSpan={4}>
                      {formatMoney(transactionCredit)}
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
            <TableFooter>
              <TableRow className="tableRowInfo">
                <TableCell className="tableCell">Summary</TableCell>
              </TableRow>
              <TableRow className="tableRowTotal">
                <TableCell className="tableCell">TOTAL</TableCell>
                <TableCell className="tableCell">
                  {formatMoney(salesInvoiceTotal)}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        )
      )}
    </div>
  );
};

export default DetailsSalesInvoice;
