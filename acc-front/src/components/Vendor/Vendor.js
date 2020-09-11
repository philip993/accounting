import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Redux Actions
import { requestGetAllVendors } from './VendorActions';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
// Material Ui

const Vendor = () => {
  const { allVendors } = useSelector((state) => state.VendorReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetAllVendors());
  }, []);

  return (
    <div>
      <h1>Vendors</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Vendor</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Bank Account No</TableCell>
            <TableCell>Tax Number</TableCell>
            <TableCell>Debit Balance</TableCell>
            <TableCell>Credit Balance</TableCell>
            <TableCell>Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
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
              <TableRow>
                <TableCell>{vendorName}</TableCell>
                <TableCell>{vendorAddress}</TableCell>
                <TableCell>{vendorBankAccount}</TableCell>
                <TableCell>{vendorTaxNumber}</TableCell>
                <TableCell>{vendorDebit}</TableCell>
                <TableCell>{vendorCredit}</TableCell>
                <TableCell>{vendorDebit - vendorCredit}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Vendor;
