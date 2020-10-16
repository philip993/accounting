import {
  SUCCESS_CREATE_TRANSACTIONS,
  FAILURE_CREATE_TRANSACTIONS,
  INPUT_TRANSACTIONS_ACCOUNT,
  INPUT_TRANSACTIONS_INVOICE,
  INPUT_TRANSACTIONS_DESCRIPTION,
  INPUT_TRANSACTIONS_DATE,
  INPUT_TRANSACTIONS_DEBIT,
  INPUT_TRANSACTIONS_CREDIT,
  SELECT_NEW_ROW,
  TRANSACTION_TOTAL,
} from './TransactionsActionTypes';

const initialState = {
  newTransactions: [],
  newTransactionsError: null,
  account: '',
  userType: '',
  documentType: '',
  transactionsDescription: '',
  transactionsDebit: 0,
  transactionsCredit: 0,
  transactionsTotal: 0,
  transactionsDate: '',
  transactionsRow: [
    {
      account: '',
      userType: '',
      documentType: '',
      transactionsDescription: '',
      transactionsDate: '',
      transactionsDebit: 0,
      transactionsCredit: 0,
    },
  ],
};

export const TransactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_CREATE_TRANSACTIONS:
      return {
        ...state,
        newTransactions: state.transactionsRow,
        newTransactionsError: false,
        account: '',
        userType: '',
        documentType: '',
        transactionsDescription: '',
        transactionsRow: [
          {
            account: '',
            userType: '',
            documentType: '',
            transactionsDescription: '',
            transactionsDate: '',
            transactionsDebit: 0,
            transactionsCredit: 0,
          },
        ],
        transactionsDebit: 0,
        transactionsCredit: 0,
      };
    case FAILURE_CREATE_TRANSACTIONS:
      return {
        ...state,
        newTransactions: null,
        newTransactionsError: true,
        account: '',
        userType: '',
        transactionsDescription: '',
        transactionsRow: [
          {
            account: '',
            userType: '',
            documentType: '',
            transactionsDescription: '',
            transactionsDebit: 0,
            transactionsCredit: 0,
          },
        ],
        transactionsDebit: 0,
        transactionsCredit: 0,
      };
    case INPUT_TRANSACTIONS_ACCOUNT:
      return {
        ...state,
        account: action.payload,
      };
    case INPUT_TRANSACTIONS_INVOICE:
      return {
        ...state,
        documentType: action.payload,
      };
    case INPUT_TRANSACTIONS_DESCRIPTION:
      return {
        ...state,
        transactionsDescription: action.payload,
      };
    case INPUT_TRANSACTIONS_DATE:
      return {
        ...state,
        transactionsDate: action.payload,
      };
    case INPUT_TRANSACTIONS_DEBIT:
      return {
        ...state,
        transactionsDebit: action.payload,
      };
    case INPUT_TRANSACTIONS_CREDIT:
      return {
        ...state,
        transactionsCredit: action.payload,
      };
    case SELECT_NEW_ROW:
      return {
        ...state,
        transactionsRow: [...state.transactionsRow, action.payload],
      };
    case TRANSACTION_TOTAL:
      return {
        ...state,
        transactionsRow: [...state.transactionsRow, action.payload],
      };
    default:
      return state;
  }
};
