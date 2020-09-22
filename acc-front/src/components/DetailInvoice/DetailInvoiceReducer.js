import {
  SUCCESS_GET_INVOICE_DETAILS,
  FAILURE_GET_INVOICE_DETAILS,
} from './DetailInvoiceActionTypes';

const initialState = {
  oneInvoice: [],
  oneInvoiceError: null,
};

export const DetailInvoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_INVOICE_DETAILS:
      return {
        ...state,
        oneInvoice: [action.payload],
        oneInvoiceError: false,
      };
    case FAILURE_GET_INVOICE_DETAILS:
      return {
        ...state,
        oneInvoice: null,
        oneInvoiceError: true,
      };
    default:
      return state;
  }
};
