import {
  SUCCESS_GET_SALES_INVOICE_DETAILS,
  FAILURE_GET_SALES_INVOICE_DETAILS,
} from './DetailsSalesInvoiceActionTypes';

const initialState = {
  oneSalesInvoice: [],
  oneSalesInvoiceError: null,
};

export const DetailsSalesInvoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_SALES_INVOICE_DETAILS:
      return {
        ...state,
        oneSalesInvoice: [action.payload],
        oneSalesInvoiceError: false,
      };
    case FAILURE_GET_SALES_INVOICE_DETAILS:
      return {
        ...state,
        oneSalesInvoice: null,
        oneSalesInvoiceError: true,
      };
    default:
      return state;
  }
};
