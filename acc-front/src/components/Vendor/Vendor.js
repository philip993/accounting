import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Redux Actions
import { requestGetAllVendors } from './VendorActions';
// Material Ui
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';

const Vendor = () => {
  const { allVendors } = useSelector((state) => state.VendorReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetAllVendors());
  }, []);

  return (
    <div className="vendors">
      <h1>Vendors</h1>
      <Table className="table">
        <TableHead className="tableHead">
          <TableRow className="tableRow">
            <TableCell className="tableCell">Vendor</TableCell>
            <TableCell className="tableCell">Address</TableCell>
            <TableCell className="tableCell">Bank Account No</TableCell>
            <TableCell className="tableCell">Tax Number</TableCell>
            <TableCell className="tableCell">Debit Balance</TableCell>
            <TableCell className="tableCell">Credit Balance</TableCell>
            <TableCell className="tableCell">Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="tableBody">
          {allVendors.map(
            ({
              vendorName,
              vendorAddress,
              vendorDebit,
              vendorCredit,
              vendorBankAccount,
              vendorTaxNumber,
              vendor,
            }) => (
              <TableRow class="tableRow">
                <TableCell className="tableCell">{vendorName}</TableCell>
                <TableCell className="tableCell">{vendorAddress}</TableCell>
                <TableCell className="tableCell">{vendorBankAccount}</TableCell>
                <TableCell className="tableCell">{vendorTaxNumber}</TableCell>
                <TableCell className="tableCell">{vendorDebit}</TableCell>
                <TableCell className="tableCell">{vendorCredit}</TableCell>
                <TableCell className="tableCell">
                  {vendorDebit - vendorCredit}
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Vendor;
