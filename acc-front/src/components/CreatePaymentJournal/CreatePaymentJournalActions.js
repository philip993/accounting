import {
  FAILURE_CREATE_PAYMENT_JOURNAL,
  INPUT_PAYMENT_JOURNAL_DATE,
  SUCCESS_CREATE_PAYMENT_JOURNAL,
} from './CreatePaymentJournalActionTypes';
import axios from 'axios';

// request
export const requestCreatePaymentJournal = () => {
  return (dispatch, getState) => {
    let {
      paymentJournalDescription,
      paymentJournalDate,
    } = getState().CreatePaymentJournalReducer;
    let { allPaymentJournals } = getState().PaymentJournalsReducer;
    let number = allPaymentJournals.length + 1;
    return axios
      .post(`http://localhost:4000/payment-journal`, {
        paymentJournalDescription: `Bank Statement 00${number}`,
        paymentJournalDate,
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_CREATE_PAYMENT_JOURNAL,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_CREATE_PAYMENT_JOURNAL,
        });
      });
  };
};

export const inputPaymentJournalDate = (e) => {
  return {
    type: INPUT_PAYMENT_JOURNAL_DATE,
    payload: e,
  };
};
