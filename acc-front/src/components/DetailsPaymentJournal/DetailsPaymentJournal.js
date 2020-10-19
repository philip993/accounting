import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Accounting
import { formatMoney } from 'accounting';
// Style
import './DetailsPaymentJournalStyle.scss';
// Redux Actions
import { requestGetPaymentJournalDetails } from './DetailsPaymentJournalActions';
// Moment
import Moment from 'react-moment';
// Material Ui
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableFooter,
} from '@material-ui/core';
const DetailsPaymentJournal = () => {
  const { onePaymentJournal } = useSelector(
    (state) => state.DetailsPaymentJournalReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetPaymentJournalDetails());
  }, []);
  return (
    <div className="detailsPaymentJournal">
      {onePaymentJournal.map(
        (
          {
            paymentJournalId,
            paymentJournalDescription,
            paymentJournalDate,
            journals,
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
                  #
                </TableCell>
                <TableCell className="tableCell" colSpan={4}>
                  {paymentJournalId}
                </TableCell>
              </TableRow>
              <TableRow className="tableRow">
                <TableCell className="tableCell" colSpan={20}>
                  Journal Description.:
                </TableCell>
                <TableCell className="tableCell">
                  {paymentJournalDescription}
                </TableCell>
              </TableRow>
              <TableRow className="tableRow">
                <TableCell className="tableCell" colSpan={20}>
                  DATE:
                </TableCell>
                <TableCell className="tableCell">
                  <Moment format="DD.MM.YYYY">{paymentJournalDate}</Moment>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableRow className="tableRowInfo">
              <TableCell className="tableCell">Lines</TableCell>
            </TableRow>
            <TableBody>
              <TableRow className="tableRow">
                <TableCell className="tableCell">Account</TableCell>
                <TableCell className="tableCell">
                  Vendor/Customer Code
                </TableCell>
                <TableCell className="tableCell" colSpan={14}>
                  Description
                </TableCell>
                <TableCell className="tableCell" colSpan={4}>
                  Debit
                </TableCell>
                <TableCell className="tableCell" colSpan={4}>
                  Credit
                </TableCell>
              </TableRow>
              {journals.map(
                (
                  {
                    transactionFK,
                    transactionCustomerFK,
                    transactionLinesFK,
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
                    <TableCell>
                      {transactionCustomerFK
                        ? transactionCustomerFK
                        : transactionLinesFK}
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
          </Table>
        )
      )}
    </div>
  );
};

export default DetailsPaymentJournal;
