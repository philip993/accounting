import {
  SUCCESS_GET_SALES_INVOICE_DETAILS,
  FAILURE_GET_SALES_INVOICE_DETAILS,
} from './DetailsSalesInvoiceActionTypes';
import axios from 'axios';

// request
export const requestGetSalesInvoiceDetails = (e) => {
  return (dispatch, getState) => {
    let { selectedInvoice } = getState().SalesInvoiceReducer;
    let id = selectedInvoice.salesInvoiceId;
    return axios
      .get(`http://localhost:4000/sales-invoice/${id}`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_GET_SALES_INVOICE_DETAILS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_GET_SALES_INVOICE_DETAILS,
        });
      });
  };
};
