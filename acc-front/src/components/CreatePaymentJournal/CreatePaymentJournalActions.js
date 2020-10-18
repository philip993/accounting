import {} from './CreatePaymentJournalActions';
import axios from 'axios';
import {
  FAILURE_CREATE_PAYMENT_JOURNAL,
  INPUT_PAYMENT_JOURNAL_DATE,
  INPUT_PAYMENT_JOURNAL_DESCRIPTION,
  INPUT_PAYMENT_JOURNAL_USER,
  SUCCESS_CREATE_PAYMENT_JOURNAL,
} from './CreatePaymentJournalActionTypes';

// request
export const requestCreatePaymentJournal = () => {
  return (dispatch, getState) => {
    let {
      paymentJournalDescription,
      paymentJournalDate,
    } = getState().CreatePaymentJournalReducer;
    return axios
      .post(`http://localhost:4000/payment-journal`, {
        paymentJournalDescription,
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

// input
export const inputPaymentJournalDescription = (e) => {
  return {
    type: INPUT_PAYMENT_JOURNAL_DESCRIPTION,
    payload: e,
  };
};

export const inputPaymentJournalDate = (e) => {
  return {
    type: INPUT_PAYMENT_JOURNAL_DATE,
    payload: e,
  };
};

export const inputPaymentJournalUser = (e) => {
  return {
    type: INPUT_PAYMENT_JOURNAL_USER,
    payload: e,
  };
};
