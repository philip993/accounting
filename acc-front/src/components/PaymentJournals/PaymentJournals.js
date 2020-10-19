import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Style
import './PaymentJournalsStyle.scss';
// Redux Actions
import {
  requestGetPaymentJournals,
  selectOnePaymentJournal,
} from './PaymentJournalsActions';
// React Router Dom
import { useHistory } from 'react-router-dom';
// Moment
import Moment from 'react-moment';
// Material Ui
import {
  TableCell,
  TableBody,
  Table,
  TableHead,
  TableRow,
  Button,
  Typography,
} from '@material-ui/core';

const PaymentJournals = () => {
  const { allPaymentJournals } = useSelector(
    (state) => state.PaymentJournalsReducer
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSelectJournal = (e) => {
    dispatch(selectOnePaymentJournal(e));
    history.push('/journal/details');
  };

  useEffect(() => {
    dispatch(requestGetPaymentJournals());
  }, []);

  return (
    <div className="paymentJournals">
      <h1>Payment Journals</h1>
      <Table className="table">
        <TableHead className="tableHead">
          <TableRow className="tableRow">
            <TableCell className="tableCell">#</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Description</TableCell>
            <TableCell className="tableCell">Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="tableBody">
          {allPaymentJournals.map(
            ({
              paymentJournalId,
              paymentJournalDescription,
              paymentJournalDate,
              journals,
            }) => (
              <TableRow className="tableRow">
                <TableCell className="tableCell">{paymentJournalId}</TableCell>
                <TableCell className="tableCell">
                  <Moment format="DD.MM.yyyy">{paymentJournalDate}</Moment>
                </TableCell>
                <TableCell className="tableCell">
                  {paymentJournalDescription}
                </TableCell>
                <TableCell className="tableCell">
                  <Button
                    onClick={handleSelectJournal.bind(this, {
                      paymentJournalId,
                    })}
                  >
                    details
                  </Button>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default PaymentJournals;
