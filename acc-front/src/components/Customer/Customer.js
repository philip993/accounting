import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// React Router Dom
import { useHistory } from 'react-router-dom';
// Style
import './CustomerStyle.scss';
// Accounting
import { formatMoney } from 'accounting';
// Redux Actions
import { requestGetAllCustomers, selectOneCustomer } from './CustomerActions';
// Material Ui
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from '@material-ui/core';

const Customer = () => {
  const { allCustomers } = useSelector((state) => state.CustomerReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleCustomerHistory = (e) => {
    dispatch(selectOneCustomer(e));
    history.push('/receivables/customers/customerhistory');
  };

  useEffect(() => {
    dispatch(requestGetAllCustomers());
  }, []);

  return (
    <div className="vendors">
      <h1>Vendors</h1>
      <Table className="table">
        <TableHead className="tableHead">
          <TableRow className="tableRow">
            <TableCell className="tableCell">Customer</TableCell>
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
          {allCustomers.map(
            ({
              customerId,
              customerName,
              customerAddress,
              customerDebit,
              customerCredit,
              customerBankAccount,
              customerTaxNumber,
              xsales,
              saleinvoice,
            }) => (
              <TableRow class="tableRow">
                <TableCell className="tableCell">{customerName}</TableCell>
                <TableCell className="tableCell">{customerAddress}</TableCell>
                <TableCell className="tableCell">
                  {customerBankAccount}
                </TableCell>
                <TableCell className="tableCell">{customerTaxNumber}</TableCell>
                <TableCell className="tableCell">
                  <Button
                    onClick={handleCustomerHistory.bind(this, { customerId })}
                  >
                    View
                  </Button>
                </TableCell>
                <TableCell className="tableCell">
                  {formatMoney(
                    (customerDebit = xsales
                      .filter((transaction) => transaction.transactionFK === 2)
                      .reduce((a, b) => a + b.transactionDebit, 0))
                  )}
                </TableCell>
                <TableCell className="tableCell">
                  {formatMoney(
                    (customerCredit = xsales
                      .filter((transaction) => transaction.transactionFK === 2)
                      .reduce((a, b) => a + b.transactionCredit, 0))
                  )}
                </TableCell>
                <TableCell className="tableCell">
                  {formatMoney(customerDebit - customerCredit)}
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Customer;
