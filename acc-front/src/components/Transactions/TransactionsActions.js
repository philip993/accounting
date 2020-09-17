import {
  SUCCESS_CREATE_TRANSACTIONS,
  FAILURE_CREATE_TRANSACTIONS,
  INPUT_TRANSACTIONS_ACCOUNT,
  INPUT_TRANSACTIONS_VENDOR,
  INPUT_TRANSACTIONS_DESCRIPTION,
  INPUT_TRANSACTIONS_DEBIT,
  INPUT_TRANSACTIONS_CREDIT,
  INPUT_TRANSACTIONS_INVOICE,
  SELECT_NEW_ROW,
} from './TransactionsActionTypes';
import axios from 'axios';

// request
export const requestCreateTransactions = () => {
  return (dispatch, getState) => {
    let {
      account,
      vendor,
      invoice,
      transactionsDescription,
      transactionsDebit,
      transactionsCredit,
    } = getState().TransactionsReducer;
    return axios
      .post(`http://localhost:4000/transactions`, {
        transactionFK: account,
        transactionLinesFK: vendor,
        transactionInvoiceFK: invoice,
        transactionsDescription,
        transactionsDebit,
        transactionsCredit,
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_CREATE_TRANSACTIONS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_CREATE_TRANSACTIONS,
        });
      });
  };
};

// input
export const inputTransactionsAccount = (e) => {
  return {
    type: INPUT_TRANSACTIONS_ACCOUNT,
    payload: e,
  };
};

export const inputTransactionsVendor = (e) => {
  return {
    type: INPUT_TRANSACTIONS_VENDOR,
    payload: e,
  };
};

export const inputTransactionsInvoice = (e) => {
  return {
    type: INPUT_TRANSACTIONS_INVOICE,
    payload: e,
  };
};

export const inputTransactionsDescription = (e) => {
  return {
    type: INPUT_TRANSACTIONS_DESCRIPTION,
    payload: e,
  };
};

export const inputTransactionsDebit = (e) => {
  return {
    type: INPUT_TRANSACTIONS_DEBIT,
    payload: e,
  };
};

export const inputTransactionsCredit = (e) => {
  return {
    type: INPUT_TRANSACTIONS_CREDIT,
    payload: e,
  };
};

// select
export const selectNewRow = (e) => {
  return {
    type: SELECT_NEW_ROW,
    payload: e,
  };
};
