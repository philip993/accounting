import {
  SUCCESS_CREATE_INVOICE,
  FAILURE_CREATE_INVOICE,
  INPUT_INVOICE_VENDOR,
  INPUT_INVOICE_NUMBER,
  INPUT_INVOICE_DATE,
  INPUT_INVOICE_DUE,
  INPUT_INVOICE_TOTAL,
} from './CreateInvoiceActionTypes';

const initialState = {
  newInvoice: [],
  newInvoiceError: null,
  vendor: '',
  invoiceTotal: 0,
  invoiceNumber: '',
  invoiceDate: '',
  invoiceDue: '',
};

export const CreateInvoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_CREATE_INVOICE:
      return {
        ...state,
        newInvoice: action.payload,
        newInvoiceError: false,
        vendor: '',
        invoiceNumber: '',
        invoiceTotal: '',
        invoiceDate: '',
        invoiceDue: '',
      };
    case FAILURE_CREATE_INVOICE:
      return {
        ...state,
        newInvoice: null,
        newInvoiceError: true,
        vendor: '',
        invoiceNumber: '',
        invoiceDate: '',
        invoiceDue: '',
      };
    case INPUT_INVOICE_VENDOR:
      return {
        ...state,
        vendor: action.payload,
      };
    case INPUT_INVOICE_NUMBER:
      return {
        ...state,
        invoiceNumber: action.payload,
      };
    case INPUT_INVOICE_TOTAL:
      return {
        ...state,
        invoiceTotal: action.payload,
      };
    case INPUT_INVOICE_DATE:
      return {
        ...state,
        invoiceDate: action.payload,
      };
    case INPUT_INVOICE_DUE:
      return {
        ...state,
        invoiceDue: action.payload,
      };
    default:
      return state;
  }
};
