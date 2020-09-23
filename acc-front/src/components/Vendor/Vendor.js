import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// React Router Dom
import { useHistory } from 'react-router-dom';
// Style
import './VendorStyle.scss';
// Accounting
import { formatMoney } from 'accounting';
// Redux Actions
import { requestGetAllVendors, selectOneVendor } from './VendorActions';
// Material Ui
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from '@material-ui/core';

const Vendor = () => {
  const { allVendors } = useSelector((state) => state.VendorReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleVendorHistory = (e) => {
    dispatch(selectOneVendor(e));
    history.push('/vendorhistory');
  };

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
            <TableCell className="tableCell">Invoice History</TableCell>
            <TableCell className="tableCell">Debit Balance</TableCell>
            <TableCell className="tableCell">Credit Balance</TableCell>
            <TableCell className="tableCell">Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="tableBody">
          {allVendors.map(
            ({
              vendorId,
              vendorName,
              vendorAddress,
              vendorDebit,
              vendorCredit,
              vendorBankAccount,
              vendorTaxNumber,
              vendorlines,
              invoice,
            }) => (
              <TableRow class="tableRow">
                <TableCell className="tableCell">{vendorName}</TableCell>
                <TableCell className="tableCell">{vendorAddress}</TableCell>
                <TableCell className="tableCell">{vendorBankAccount}</TableCell>
                <TableCell className="tableCell">{vendorTaxNumber}</TableCell>
                <TableCell className="tableCell">
                  <Button
                    onClick={handleVendorHistory.bind(this, { vendorId })}
                  >
                    View
                  </Button>
                </TableCell>
                <TableCell className="tableCell">
                  {formatMoney(
                    (vendorDebit = vendorlines
                      .filter((transaction) => transaction.transactionFK === 3)
                      .reduce((a, b) => a + b.transactionDebit, 0))
                  )}
                </TableCell>
                <TableCell className="tableCell">
                  {formatMoney(
                    (vendorCredit = vendorlines
                      .filter((transaction) => transaction.transactionFK === 3)
                      .reduce((a, b) => a + b.transactionCredit, 0))
                  )}
                </TableCell>
                <TableCell className="tableCell">
                  {formatMoney(vendorDebit - vendorCredit)}
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
