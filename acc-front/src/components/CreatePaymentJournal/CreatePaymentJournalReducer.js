import {
  FAILURE_CREATE_PAYMENT_JOURNAL,
  INPUT_PAYMENT_JOURNAL_DATE,
  SUCCESS_CREATE_PAYMENT_JOURNAL,
} from './CreatePaymentJournalActionTypes';

const initialState = {
  newPaymentJournal: [],
  newPaymentJournalError: null,
  paymentJournalDescription: '',
  paymentJournalDate: '',
  user: '',
};

export const CreatePaymentJournalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_CREATE_PAYMENT_JOURNAL:
      return {
        ...state,
        newPaymentJournal: action.payload,
        newPaymentJournalError: false,
        paymentJournalDescription: '',
        paymentJournalDate: '',
      };
    case FAILURE_CREATE_PAYMENT_JOURNAL:
      return {
        ...state,
        newPaymentJournal: null,
        newPaymentJournalError: true,
      };
    case INPUT_PAYMENT_JOURNAL_DATE:
      return {
        ...state,
        paymentJournalDate: action.payload,
      };
    default:
      return state;
  }
};
