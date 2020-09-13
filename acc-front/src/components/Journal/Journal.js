import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
              transactionDebit,
              transactionCredit,
              accounts,
            }) => (
              <TableRow className="tableRow">
                <TableCell className="tableCell">{transactionId}</TableCell>
                <TableCell className="tableCell">{transactionFK}</TableCell>
                <TableCell className="tableCell">
                  {transactionDescription}
                </TableCell>
                <TableCell className="tableCell">{transactionDebit}</TableCell>
                <TableCell className="tableCell">{transactionCredit}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Journal;
