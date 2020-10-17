import {
  FAILURE_GET_ALL_SALES_INVOICES,
  SELECT_ONE_SALES_INVOICE,
  SUCCESS_GET_ALL_SALES_INVOICES,
} from './SalesInvoiceActionTypes';
import axios from 'axios';

// request
export const requestGetAllSalesInvoices = () => {
  return (dispatch, getState) => {
    return axios
      .get(`http://localhost:4000/sales-invoice`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_GET_ALL_SALES_INVOICES,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_GET_ALL_SALES_INVOICES,
        });
      });
  };
};

// select
export const selectOneSalesInvoice = (e) => {
  return {
    type: SELECT_ONE_SALES_INVOICE,
    payload: e,
  };
};
