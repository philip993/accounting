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
  TRANSACTION_TOTAL,
  INPUT_TRANSACTIONS_DATE,
} from './TransactionsActionTypes';
import axios from 'axios';

// request
export const requestCreateTransactions = () => {
  return (dispatch, getState) => {
    let { transactionsRow } = getState().TransactionsReducer;
    let { newInvoice } = getState().CreateInvoiceReducer;
    let transactions = transactionsRow
      .map((transaction, index) => ({
        transactionFK: transaction.account,
        transactionLinesFK: transaction.vendor,
        transactionInvoiceFK: newInvoice.invoiceId,
        transactionDate: newInvoice.invoiceDate,
        transactionDescription: transaction.transactionsDescription,
        transactionDebit: transaction.transactionsDebit,
        transactionCredit: transaction.transactionsCredit,
      }))
      .slice(1);
    console.log(transactions);
    return axios
      .post(`http://localhost:4000/transactions`, transactions)
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

export const inputTransactionsDate = (e) => {
  return {
    type: INPUT_TRANSACTIONS_DATE,
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

// total
export const getTransactionsTotal = (e) => {
  return {
    type: TRANSACTION_TOTAL,
    payload: e,
  };
};
