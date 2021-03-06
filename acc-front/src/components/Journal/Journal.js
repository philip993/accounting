import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Style
import './JournalStyle.scss';
// Accounting
import { formatMoney } from 'accounting';
// Moment
// import * as moment from 'moment';
import Moment from 'react-moment';
// Redux Actions
import { requestGetTransactions } from './JournalActions';
// Mateiral Ui
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';

const Journal = () => {
  const { transactions } = useSelector((state) => state.JournalReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetTransactions());
  }, []);

  return (
    <div className="journal">
      <h1>Journal</h1>
      <Table className="table">
        <TableHead className="tableHead">
          <TableRow className="tableRow">
            <TableCell className="tableCell">#</TableCell>
            <TableCell className="tableCell">Account Code</TableCell>
            <TableCell className="tableCell">Description</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Debit</TableCell>
            <TableCell className="tableCell">Credit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="tableBody">
          {transactions.map(
            ({
              transactionId,
              transactionFK,
              transactionDescription,
              transactionDate,
              transactionDebit,
              transactionCredit,
              accounts,
            }) => (
              <TableRow className="tableRow">
                <TableCell className="tableCell">{transactionId}</TableCell>
                <TableCell className="tableCell">
                  {accounts.accountCode}. {accounts.accountName}
                </TableCell>
                <TableCell className="tableCell">
                  {transactionDescription}
                </TableCell>
                <TableCell className="tableCell">
                  <Moment format="DD.MM.yyyy">{transactionDate}</Moment>
                </TableCell>
                <TableCell className="tableCell">
                  {formatMoney(transactionDebit)}
                </TableCell>
                <TableCell className="tableCell">
                  {formatMoney(transactionCredit)}
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Journal;
