import {
  SUCCESS_GET_ALL_TRANSACTIONS,
  FAILURE_GET_ALL_TRANSACTIONS,
} from './JournalActionTypes';

const initialState = {
  transactions: [],
  transactionError: null,
};

export const JournalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_ALL_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
        transactionError: false,
      };
    case FAILURE_GET_ALL_TRANSACTIONS:
      return {
        ...state,
        transactions: null,
        transactionError: true,
      };
    default:
      return state;
  }
};
