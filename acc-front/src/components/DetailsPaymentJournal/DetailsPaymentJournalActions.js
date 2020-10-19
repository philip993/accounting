import {
  FAILURE_GET_ONE_PAYMENT_JOURNAL,
  SUCCESS_GET_ONE_PAYMENT_JOURNAL,
} from './DetailsPaymentJournalActionTypes';
import axios from 'axios';

// request
export const requestGetPaymentJournalDetails = (e) => {
  return (dispatch, getState) => {
    let { selectedJournal } = getState().PaymentJournalsReducer;
    let id = selectedJournal.paymentJournalId;
    return axios
      .get(`http://localhost:4000/payment-journal/${id}`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_GET_ONE_PAYMENT_JOURNAL,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_GET_ONE_PAYMENT_JOURNAL,
        });
      });
  };
};
