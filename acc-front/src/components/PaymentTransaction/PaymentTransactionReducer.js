import {
  FAILURE_CREATE_PAYMENT_TRANSACTION,
  INPUT_CREATE_PAYMENT_CUSTOMER,
  INPUT_CREATE_PAYMENT_VENDOR,
  SUCCESS_CREATE_PAYMENT_TRANSACTION,
  INPUT_CREATE_PAYMENT_ACCOUNT,
  INPUT_CREATE_PAYMENT_DATE,
  INPUT_CREATE_PAYMENT_DEBIT,
  INPUT_CREATE_PAYMENT_CREDIT,
  SELECT_NEW_ROW,
  TRANSACTION_TOTAL,
} from './PaymentTransactionActionTypes';

const initialState = {
  newPaymentTransaction: [],
  newPaymentTransactionError: null,
  paymentCustomer: '',
  paymentVendor: '',
  paymentAccount: '',
  userType: '',
  paymentDescription: '',
  paymentRow: [
    {
      paymentAccount: '',
      paymentCustomer: '',
      paymentVendor: '',
      paymentDescription: '',
      paymentDebit: 0,
      paymentCredit: 0,
    },
  ],
  paymentDebit: 0,
  paymentCredit: 0,
};

export const PaymentTransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_CREATE_PAYMENT_TRANSACTION:
      return {
        ...state,
        newPaymentTransaction: state.paymentRow,
        newPaymentTransactionError: false,
        paymentDescription: '',
        paymentAccount: '',
        paymentRow: [
          {
            paymentAccount: '',
            paymentCustomer: null,
            paymentVendor: null,
            paymentDescription: '',
            paymentDebit: 0,
            paymentCredit: 0,
          },
        ],
        paymentDebit: 0,
        paymentCredit: 0,
      };
    case FAILURE_CREATE_PAYMENT_TRANSACTION:
      return {
        ...state,
        newPaymentTransaction: null,
        newPaymentTransactionError: true,
      };
    case INPUT_CREATE_PAYMENT_CUSTOMER:
      return {
        ...state,
        paymentCustomer: action.payload,
      };
    case INPUT_CREATE_PAYMENT_VENDOR:
      return {
        ...state,
        paymentVendor: action.payload,
      };
    case INPUT_CREATE_PAYMENT_ACCOUNT:
      return {
        ...state,
        paymentAccount: action.payload,
      };
    case INPUT_CREATE_PAYMENT_DATE:
      return {
        ...state,
        paymentDate: action.payload,
      };
    case INPUT_CREATE_PAYMENT_DEBIT:
      return {
        ...state,
        paymentDebit: action.payload,
      };
    case INPUT_CREATE_PAYMENT_CREDIT:
      return {
        ...state,
        paymentCredit: action.payload,
      };
    case SELECT_NEW_ROW:
      return {
        ...state,
        paymentRow: [...state.paymentRow, action.payload],
      };
    case TRANSACTION_TOTAL:
      return {
        ...state,
        paymentRow: [...state.paymentRow, action.payload],
      };
    default:
      return state;
  }
};
