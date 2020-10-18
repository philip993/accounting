import {
  FAILURE_CREATE_PAYMENT_JOURNAL,
  INPUT_PAYMENT_JOURNAL_DATE,
  INPUT_PAYMENT_JOURNAL_DESCRIPTION,
  INPUT_PAYMENT_JOURNAL_USER,
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
    case INPUT_PAYMENT_JOURNAL_DESCRIPTION:
      return {
        ...state,
        paymentJournalDescription: action.payload,
      };
    case INPUT_PAYMENT_JOURNAL_DATE:
      return {
        ...state,
        paymentJournalDate: action.payload,
      };
    case INPUT_PAYMENT_JOURNAL_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
