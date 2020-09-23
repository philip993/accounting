import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Redux Actions
import { requestGetOneVendor } from './VendorActions';
// Material Ui
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableFooter,
} from '@material-ui/core';

const VendorHistory = () => {
  const { oneVendor } = useSelector((state) => state.VendorReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetOneVendor());
  }, []);

  return (
    <div className="vendorHistory">
      {oneVendor.map(
        ({
          vendorName,
          invoice,
          vendorAddress,
          vendorTaxNumber,
          vendorBankAccount,
        }) => (
          <Table>
            <TableHead className="tableHead">
              <TableRow className="tableRow">
                <TableCell className="tableCell">{vendorName}</TableCell>
                <TableCell className="tableCell">{vendorAddress}</TableCell>
                <TableCell className="tableCell">{vendorBankAccount}</TableCell>
                <TableCell className="tableCell">{vendorTaxNumber}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tableBody">
              <TableRow className="tableRow">
                <TableCell className="tableCell">Date</TableCell>
                <TableCell className="tableCell">Invoice No.</TableCell>
                <TableCell className="tableCell">Amount</TableCell>
                <TableCell className="tableCell">Due Date</TableCell>
              </TableRow>
              {invoice.map(
                ({ invoiceDate, invoiceNumber, invoiceTotal, invoiceDue }) => (
                  <TableRow className="tableRow">
                    <TableCell className="tableCell">{invoiceDate}</TableCell>
                    <TableCell className="tableCell">{invoiceNumber}</TableCell>
                    <TableCell className="tableCell">
                      {invoiceTotal.toFixed(2)} $
                    </TableCell>
                    <TableCell className="tableCell">{invoiceDue}</TableCell>
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
                  {parseInt(
                    invoice.reduce((a, b) => a + b.invoiceTotal.toFixed(2), 0)
                  )}{' '}
                  $
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        )
      )}
    </div>
  );
};

export default VendorHistory;
