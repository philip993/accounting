import {
  SUCCESS_CREATE_SALES_INVOICE,
  FAILURE_CREATE_SALES_INVOICE,
  INPUT_SALES_INVOICE_TOTAL,
  INPUT_SALES_INVOICE_CUSTOMER,
  INPUT_SALES_INVOICE_DATE,
  INPUT_SALES_INVOICE_DUE,
} from './CreateSalesInvoiceActionTypes';

const initialState = {
  newSalesInvoice: [],
  newSalesInvoiceError: null,
  customer: '',
  salesInvoiceTotal: 0,
  salesInvoiceNumber: '',
  salesInvoiceDate: '',
  salesInvoiceDue: '',
};

export const CreateSalesInvoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_CREATE_SALES_INVOICE:
      return {
        ...state,
        newSalesInvoice: action.payload,
        newSalesInvoiceError: false,
        customer: '',
        salesInvoiceTotal: '',
        salesInvoiceNumber: '',
        salesInvoiceDate: '',
        salesInvoiceDue: '',
      };
    case FAILURE_CREATE_SALES_INVOICE:
      return {
        ...state,
        newSalesInvoice: null,
        newSalesInvoiceError: true,
        customer: '',
        salesInvoiceTotal: '',
        salesInvoiceNumber: '',
        salesInvoiceDate: '',
        salesInvoiceDue: '',
      };
    case INPUT_SALES_INVOICE_CUSTOMER:
      return {
        ...state,
        customer: action.payload,
      };
    case INPUT_SALES_INVOICE_DATE:
      return {
        ...state,
        salesInvoiceDate: action.payload,
      };
    case INPUT_SALES_INVOICE_DUE:
      return {
        ...state,
        salesInvoiceDue: action.payload,
      };
    case INPUT_SALES_INVOICE_TOTAL:
      return {
        ...state,
        salesInvoiceTotal: action.payload,
      };
    default:
      return state;
  }
};
