import {
  SUCCESS_GET_ALL_INVOICES,
  FAILURE_GET_ALL_INVOICES,
  SELECT_ONE_INVOICE,
} from './InvoiceActionTypes';
import axios from 'axios';

// request Get
export const requestGetAllInvoices = () => {
  return (dispatch, getState) => {
    return axios
      .get(`http://localhost:4000/invoice`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_GET_ALL_INVOICES,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_GET_ALL_INVOICES,
        });
      });
  };
};

// select
export const selectOneInvoice = (e) => {
  return {
    type: SELECT_ONE_INVOICE,
    payload: e,
  };
};
