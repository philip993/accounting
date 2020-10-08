import {
  FAILURE_GET_ALL_SALES_INVOICES,
  SELECT_ONE_SALES_INVOICE,
  SUCCESS_GET_ALL_SALES_INVOICES,
} from './SalesInvoiceActionTypes';

const initialState = {
  allSalesInvoice: [],
  allSalesInvoiceError: null,
  selectedInvoice: [],
};

export const SalesInvoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_ALL_SALES_INVOICES:
      return {
        ...state,
        allSalesInvoice: action.payload,
        allSalesInvoiceError: false,
      };
    case FAILURE_GET_ALL_SALES_INVOICES:
      return {
        ...state,
        allSalesInvoice: null,
        allSalesInvoiceError: true,
      };
    case SELECT_ONE_SALES_INVOICE:
      return {
        ...state,
        selectedInvoice: action.payload,
      };
    default:
      return state;
  }
};
