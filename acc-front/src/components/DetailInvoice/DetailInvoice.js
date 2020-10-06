import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Style
import './DetailInvoiceStyle.scss';
// Accounting
import { formatMoney } from 'accounting';
// Moment
import Moment from 'react-moment';
// Redux Actions
import { requestGetInvoiceDetails } from './DetailInvoiceActions';
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

const DetailInvoice = () => {
  const { oneInvoice } = useSelector((state) => state.DetailInvoiceReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetInvoiceDetails());
  }, []);

  return (
    <div className="detailInvoice">
      {oneInvoice.map(
        (
          {
            invoiceId,
            invoiceNumber,
            invoiceDate,
            invoiceTotal,
            invoiceDue,
            invoices,
            vendor,
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
                  Posted Invoice No.
                </TableCell>
                <TableCell className="tableCell" colSpan={4}>
                  {invoiceId}
                </TableCell>
              </TableRow>
              <TableRow className="tableRow">
                <TableCell className="tableCell" colSpan={20}>
                  Vendor: {vendor.vendorName}
                </TableCell>
                <TableCell className="tableCell">
                  Invoice No.: {invoiceNumber}
                </TableCell>
              </TableRow>
              <TableRow className="tableRow">
                <TableCell className="tableCell" colSpan={20}>
                  Vendor Code: {vendor.vendorId}
                </TableCell>
                <TableCell className="tableCell">
                  DATE:<Moment format="DD.MM.YYYY">{invoiceDate}</Moment>{' '}
                </TableCell>
              </TableRow>
              <TableRow className="tableRow">
                <TableCell className="tableCell" colSpan={20}>
                  Vendor Address: {vendor.vendorAddress}
                </TableCell>
                <TableCell className="tableCell">
                  DUE: <Moment format="DD.MM.YYYY">{invoiceDue}</Moment>{' '}
                </TableCell>
              </TableRow>
              <TableRow className="tableRow">
                <TableCell className="tableCell" colSpan={20}>
                  Tax No.: {vendor.vendorTaxNumber}
                </TableCell>
                <TableCell className="tableCell"></TableCell>
              </TableRow>
              <TableRow className="tableRow">
                <TableCell className="tableCell" colSpan={20}>
                  Bank Account: {vendor.vendorBankAccount}
                </TableCell>
                <TableCell className="tableCell"></TableCell>
              </TableRow>
            </TableHead>
            <TableRow className="tableRowInfo">
              <TableCell className="tableCell">Lines</TableCell>
            </TableRow>
            <TableBody>
              {invoices.map(
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
                  {formatMoney(invoiceTotal)}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        )
      )}
    </div>
  );
};

export default DetailInvoice;
