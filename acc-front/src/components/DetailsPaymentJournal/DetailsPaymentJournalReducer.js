import {
  SUCCESS_GET_ONE_PAYMENT_JOURNAL,
  FAILURE_GET_ONE_PAYMENT_JOURNAL,
} from './DetailsPaymentJournalActionTypes';

const initialState = {
  onePaymentJournal: [],
  onePaymentJournalError: null,
};

export const DetailsPaymentJournalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_ONE_PAYMENT_JOURNAL:
      return {
        ...state,
        onePaymentJournal: [action.payload],
        onePaymentJournalError: false,
      };
    case FAILURE_GET_ONE_PAYMENT_JOURNAL:
      return {
        ...state,
        onePaymentJournal: null,
        onePaymentJournalError: true,
      };
    default:
      return state;
  }
};
