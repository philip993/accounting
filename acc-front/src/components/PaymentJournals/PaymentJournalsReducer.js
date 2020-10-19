import {
  SUCCESS_GET_PAYMENT_JOURNALS,
  FAILURE_GET_PAYMENT_JOURNALS,
  SELECT_ONE_PAYMENT_JOURNAL,
} from './PaymentJournalsActionTypes';

const initialState = {
  allPaymentJournals: [],
  allPaymentJournalsError: null,
  paymentJournalLength: 0,
  selectedJournal: [],
};

export const PaymentJournalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_PAYMENT_JOURNALS:
      return {
        ...state,
        allPaymentJournals: action.payload,
        allPaymentJournalsError: false,
        paymentJournalLength: state.allPaymentJournals.length,
      };
    case FAILURE_GET_PAYMENT_JOURNALS:
      return {
        ...state,
        allPaymentJournals: null,
        allPaymentJournalsError: true,
      };
    case SELECT_ONE_PAYMENT_JOURNAL:
      return {
        ...state,
        selectedJournal: action.payload,
      };
    default:
      return state;
  }
};
