import {
  FAILURE_CREATE_PAYMENT_TRANSACTION,
  INPUT_CREATE_PAYMENT_CUSTOMER,
  INPUT_CREATE_PAYMENT_VENDOR,
  SUCCESS_CREATE_PAYMENT_TRANSACTION,
  INPUT_CREATE_PAYMENT_ACCOUNT,
  INPUT_CREATE_PAYMENT_DATE,
  INPUT_CREATE_PAYMENT_DESCRIPTION,
  INPUT_CREATE_PAYMENT_DEBIT,
  INPUT_CREATE_PAYMENT_CREDIT,
  SELECT_NEW_ROW,
  TRANSACTION_TOTAL,
} from './PaymentTransactionActionTypes';
import axios from 'axios';

// request
export const requestCreatePayTransactions = () => {
  return (dispatch, getState) => {
    let { paymentRow } = getState().PaymentTransactionReducer;
    let transactions = paymentRow
      .map((transaction, index) => ({
        transactionFK: transaction.paymentAccount,
        transactionLinesFK: transaction.paymentVendor,
        transactionCustomerFK: transaction.paymentCustomer,
        transactionDate: '2020-01-01',
        transactionDescription: transaction.paymentDescription,
        transactionDebit: transaction.paymentDebit,
        transactionCredit: transaction.paymentCredit,
      }))
      .slice(1);
    console.log(transactions);
    return axios
      .post(`http://localhost:4000/transactions`, transactions)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_CREATE_PAYMENT_TRANSACTION,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_CREATE_PAYMENT_TRANSACTION,
        });
      });
  };
};

// input
export const inputCreatePaymentCustomer = (e) => {
  return {
    type: INPUT_CREATE_PAYMENT_CUSTOMER,
    payload: e,
  };
};

export const inputCreatePaymentVendor = (e) => {
  return {
    type: INPUT_CREATE_PAYMENT_VENDOR,
    payload: e,
  };
};

export const inputCreatePaymentAccount = (e) => {
  return {
    type: INPUT_CREATE_PAYMENT_ACCOUNT,
    payload: e,
  };
};

export const inputCreatePaymentDescription = (e) => {
  return {
    type: INPUT_CREATE_PAYMENT_DESCRIPTION,
    payload: e,
  };
};

export const inputCreatePaymentDate = (e) => {
  return {
    type: INPUT_CREATE_PAYMENT_DATE,
    payload: e,
  };
};

export const inputCreatePaymentDebit = (e) => {
  return {
    type: INPUT_CREATE_PAYMENT_DEBIT,
    payload: e,
  };
};

export const inputCreatePaymentCredit = (e) => {
  return {
    type: INPUT_CREATE_PAYMENT_CREDIT,
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
export const getPaymentTransactionsTotal = (e) => {
  return {
    type: TRANSACTION_TOTAL,
    payload: e,
  };
};
