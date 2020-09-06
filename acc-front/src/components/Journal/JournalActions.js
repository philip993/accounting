import {
  SUCCESS_GET_ALL_TRANSACTIONS,
  FAILURE_GET_ALL_TRANSACTIONS,
} from './JournalActionTypes';
import axios from 'axios';

// request
export const requestGetTransactions = () => {
  return (dispatch, getState) => {
    return axios
      .get(`http://localhost:4000/transactions`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_GET_ALL_TRANSACTIONS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_GET_ALL_TRANSACTIONS,
        });
      });
  };
};
