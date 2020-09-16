import {} from './TransactionsActionTypes';
import {
  SUCCESS_CREATE_TRANSACTIONS,
  FAILURE_CREATE_TRANSACTIONS,
} from './TransactionsActions';

const initialState = {
  newTransactions: [],
  newTransactionsError: null,
  account: '',
  vendor: '',
  transactionsDescription: '',
  transactionsDebit: '',
  transactionsCredit: '',
};

export const TransactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_CREATE_TRANSACTIONS:
      return {
        ...state,
        newTransactions: action.payload,
        newTransactionsError: false,
        account: '',
        vendor: '',
        transactionsDescription: '',
        transactionsDebit: '',
        transactionsCredit: '',
      };
    case FAILURE_CREATE_TRANSACTIONS:
      return {
        ...state,
        newTransactions: null,
        newTransactionsError: true,
        account: '',
        vendor: '',
        transactionsDescription: '',
        transactionsDebit: '',
        transactionsCredit: '',
      };
    default:
      return state;
  }
};
