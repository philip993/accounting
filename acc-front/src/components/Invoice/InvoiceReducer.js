import {
  SUCCESS_GET_ALL_INVOICES,
  FAILURE_GET_ALL_INVOICES,
  SELECT_ONE_INVOICE,
} from './InvoiceActionTypes';

const initialState = {
  allInvoices: [],
  allInvoicesError: null,
  selectedInvoice: [],
};

export const InvoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_ALL_INVOICES:
      return {
        ...state,
        allInvoices: action.payload,
        allInvoicesError: false,
      };
    case FAILURE_GET_ALL_INVOICES:
      return {
        ...state,
        allInvoices: null,
        allInvoicesError: false,
      };
    case SELECT_ONE_INVOICE:
      return {
        ...state,
        selectedInvoice: action.payload,
      };
    default:
      return state;
  }
};
