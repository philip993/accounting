import {
  SUCCESS_GET_INVOICE_DETAILS,
  FAILURE_GET_INVOICE_DETAILS,
} from './DetailInvoiceActionTypes';
import axios from 'axios';

// request
export const requestGetInvoiceDetails = (e) => {
  return (dispatch, getState) => {
    let { selectedInvoice } = getState().InvoiceReducer;
    let id = selectedInvoice.invoiceId;
    return axios
      .get(`http://localhost:4000/invoice/${id}`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_GET_INVOICE_DETAILS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_GET_INVOICE_DETAILS,
        });
      });
  };
};
