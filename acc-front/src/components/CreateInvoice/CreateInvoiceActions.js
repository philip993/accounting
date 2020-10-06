import {
  SUCCESS_CREATE_INVOICE,
  FAILURE_CREATE_INVOICE,
  INPUT_INVOICE_VENDOR,
  INPUT_INVOICE_NUMBER,
  INPUT_INVOICE_DATE,
  INPUT_INVOICE_DUE,
  INPUT_INVOICE_TOTAL,
} from './CreateInvoiceActionTypes';
import axios from 'axios';

// request Create
export const requestCreateInvoice = () => {
  return (dispatch, getState) => {
    let {
      vendor,
      invoiceNumber,
      invoiceTotal,
      invoiceDate,
      invoiceDue,
    } = getState().CreateInvoiceReducer;
    return axios
      .post(`http://localhost:4000/invoice`, {
        invoiceVendorFK: vendor,
        invoiceNumber,
        invoiceTotal,
        invoiceDate,
        invoiceDue,
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_CREATE_INVOICE,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_CREATE_INVOICE,
        });
      });
  };
};

// input
export const inputInvoiceVendor = (e) => {
  return {
    type: INPUT_INVOICE_VENDOR,
    payload: e,
  };
};

export const inputInvoiceNumber = (e) => {
  return {
    type: INPUT_INVOICE_NUMBER,
    payload: e,
  };
};

export const inputInvoiceDate = (e) => {
  return {
    type: INPUT_INVOICE_DATE,
    payload: e,
  };
};

export const inputInvoiceDue = (e) => {
  return {
    type: INPUT_INVOICE_DUE,
    payload: e,
  };
};

export const inputInvoiceTotal = (e) => {
  return {
    type: INPUT_INVOICE_TOTAL,
    payload: e,
  };
};
