import {
  SUCCESS_GET_ALL_INVOICES,
  FAILURE_GET_ALL_INVOICES,
} from './InvoiceActionTypes';

const initialState = {
  allInvoices: [],
  allInvoicesError: null,
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
    default:
      return state;
  }
};
