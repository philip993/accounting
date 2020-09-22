import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Redux Actions
import { requestGetInvoiceDetails } from './DetailInvoiceActions';
// Material Ui
import {
  Card,
  CardContent,
  Typography,
  TableRow,
  TableCell,
} from '@material-ui/core';

const DetailInvoice = () => {
  const { oneInvoice } = useSelector((state) => state.DetailInvoiceReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetInvoiceDetails());
  }, []);

  return (
    <div className="detailInvoice">
      <Card>
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
            <CardContent>
              <TableRow className="tableRow">
                <TableCell className="tableCell">Basic Information</TableCell>
              </TableRow>
              <TableRow className="tableRow">
                <TableCell className="tableCell" colSpan={8}>
                  Posted Invoice No.
                </TableCell>
                <TableCell className="tableCell">{invoiceId}</TableCell>
              </TableRow>
              <TableRow className="tableRow">
                <TableCell className="tableCell" colSpan={8}>
                  {vendor.vendorName}
                </TableCell>
                <TableCell className="tableCell">{invoiceNumber}</TableCell>
              </TableRow>
              <TableRow className="tableRow">
                <TableCell className="tableCell" colSpan={8}>
                  {vendor.vendorId}
                </TableCell>
                <TableCell className="tableCell">{invoiceDate}</TableCell>
              </TableRow>
              <TableRow className="tableRow">
                <TableCell className="tableCell" colSpan={8}>
                  {vendor.vendorAddress}
                </TableCell>
                <TableCell className="tableCell">{invoiceDue}</TableCell>
              </TableRow>
              <TableRow className="tableRow">
                <TableCell className="tableCell">
                  {vendor.vendorTaxNumber}
                </TableCell>
              </TableRow>

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
                    <TableCell className="tableCell" colSpan={1}>
                      {transactionFK}
                    </TableCell>
                    <TableCell className="tableCell" colSpan={4}>
                      {transactionDescription}
                    </TableCell>
                    <TableCell className="tableCell" colSpan={2}>
                      {transactionDebit.toFixed(2)} $
                    </TableCell>
                    <TableCell className="tableCell" colSpan={2}>
                      {transactionCredit.toFixed(2)} $
                    </TableCell>
                  </TableRow>
                )
              )}

              <TableRow>
                <TableCell className="tableCell" colSpan={4}>
                  TOTAL
                </TableCell>
                <TableCell className="tableCell" colSpan={3}>
                  {invoiceTotal.toFixed(2)} $
                </TableCell>
              </TableRow>
            </CardContent>
          )
        )}
      </Card>
    </div>
  );
};

export default DetailInvoice;
