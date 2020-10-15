import {
  SUCCESS_CREATE_SALES_INVOICE,
  FAILURE_CREATE_SALES_INVOICE,
  INPUT_SALES_INVOICE_CUSTOMER,
  INPUT_SALES_INVOICE_NUMBER,
  INPUT_SALES_INVOICE_DATE,
  INPUT_SALES_INVOICE_TOTAL,
  INPUT_SALES_INVOICE_DUE,
} from './CreateSalesInvoiceActionTypes';
import axios from 'axios';

// request
export const requestCreateSalesInvoice = () => {
  return (dispatch, getState) => {
    let {
      customer,
      salesInvoiceNumber,
      salesInvoiceTotal,
      salesInvoiceDate,
      salesInvoiceDue,
    } = getState().CreateSalesInvoiceReducer;
    return axios
      .post(`http://localhost:4000/sales-invoice`, {
        salesInvoiceCustomerFK: customer,
        salesInvoiceNumber,
        salesInvoiceTotal,
        salesInvoiceDate,
        salesInvoiceDue,
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_CREATE_SALES_INVOICE,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_CREATE_SALES_INVOICE,
        });
      });
  };
};

// input
export const inputSalesInvoiceCustomer = (e) => {
  return {
    type: INPUT_SALES_INVOICE_CUSTOMER,
    payload: e,
  };
};

export const inputSalesInvoiceNumber = (e) => {
  return {
    type: INPUT_SALES_INVOICE_NUMBER,
    payload: e,
  };
};

export const inputSalesInvoiceDate = (e) => {
  return {
    type: INPUT_SALES_INVOICE_DATE,
    payload: e,
  };
};

export const inputSalesInvoiceDue = (e) => {
  return {
    type: INPUT_SALES_INVOICE_DUE,
    payload: e,
  };
};

export const inputSalesInvoiceTotal = (e) => {
  return {
    type: INPUT_SALES_INVOICE_TOTAL,
    payload: e,
  };
};
