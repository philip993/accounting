import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Redux Actions
import { requestGetChartOfAccounts } from './ChartAccountsActions';
// Material Ui
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';

const ChartAccounts = () => {
  const { accounts } = useSelector((state) => state.ChartAccountsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetChartOfAccounts());
  }, []);

  return (
    <div className="chartAccounts">
      <h1>Chart of Accounts</h1>
      <Table className="table">
        <TableHead className="tableHead">
          <TableRow className="tableRow">
            <TableCell className="tableCell">#</TableCell>
            <TableCell className="tableCell">Code</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Debit</TableCell>
            <TableCell className="tableCell">Credit</TableCell>
            <TableCell className="tableCell">Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="tableBody">
          {accounts.map(
            ({
              accountId,
              accountCode,
              accountName,
              debitBalance,
              creditBalance,
              transactions,
            }) => (
              <TableRow className="tableRow">
                <TableCell className="tableCell">{accountId}.</TableCell>
                <TableCell className="tableCell">{accountCode}</TableCell>
                <TableCell className="tableCell">{accountName}</TableCell>
                <TableCell className="tableCell">
                  {
                    (debitBalance = transactions.reduce(
                      (a, b) => a + b.transactionDebit,
                      0
                    ))
                  }
                </TableCell>
                <TableCell className="tableCell">
                  {
                    (creditBalance = transactions.reduce(
                      (a, b) => a + b.transactionCredit,
                      0
                    ))
                  }
                </TableCell>
                <TableCell className="tableCell">
                  {debitBalance - creditBalance}
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ChartAccounts;
