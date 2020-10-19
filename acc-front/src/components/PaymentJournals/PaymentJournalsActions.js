import {
  SUCCESS_GET_PAYMENT_JOURNALS,
  FAILURE_GET_PAYMENT_JOURNALS,
  SELECT_ONE_PAYMENT_JOURNAL,
} from './PaymentJournalsActionTypes';
import axios from 'axios';

// request
export const requestGetPaymentJournals = () => {
  return (dispatch, getState) => {
    return axios
      .get(`http://localhost:4000/payment-journal`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_GET_PAYMENT_JOURNALS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_GET_PAYMENT_JOURNALS,
        });
      });
  };
};

// select
export const selectOnePaymentJournal = (e) => {
  return {
    type: SELECT_ONE_PAYMENT_JOURNAL,
    payload: e,
  };
};
