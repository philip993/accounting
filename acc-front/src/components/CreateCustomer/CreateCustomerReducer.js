import {
  SUCCESS_CREATE_CUSTOMER,
  FAILURE_CREATE_CUSTOMER,
  INPUT_CUSTOMER_NAME,
  INPUT_CUSTOMER_ADDRESS,
  INPUT_CUSTOMER_BANK_ACCOUNT,
  INPUT_CUSTOMER_TAX_NUMBER,
  INPUT_CUSTOMER_CITY,
  INPUT_CUSTOMER_ZIP_CODE,
  INPUT_CUSTOMER_TYPE,
  INPUT_CUSTOMER_TELEPHONE,
  INPUT_CUSTOMER_EMAIL,
  INPUT_CUSTOMER_LANGUAGE,
  INPUT_CUSTOMER_CURRENCY,
  INPUT_CUSTOMER_STATE,
} from './CreateCustomerActionTypes';

const initialState = {
  newCustomer: [],
  newCustomerError: null,
  customerName: '',
  customerAddress: '',
  customerBankAccount: '',
  customerTaxNumber: '',
  customerCity: '',
  customerState: '',
  customerZipcode: '',
  customerType: '',
  customerTelephone: '',
  customerEmail: '',
  customerLanguage: '',
  customerCurrency: '',
  customerDebit: 0,
  customerCredit: 0,
};

export const CreateCustomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_CREATE_CUSTOMER:
      return {
        ...state,
        newCustomer: action.payload,
        newCustomerError: false,
        customerName: '',
        customerAddress: '',
        customerBankAccount: '',
        customerTaxNumber: '',
        customerCity: '',
        customerState: '',
        customerZipcode: '',
        customerType: '',
        customerTelephone: '',
        customerEmail: '',
        customerLanguage: '',
        customerDebit: 0,
        customerCredit: 0,
      };
    case FAILURE_CREATE_CUSTOMER:
      return {
        ...state,
        newCustomer: null,
        newCustomerError: true,
        customerName: '',
        customerAddress: '',
        customerBankAccount: '',
        customerTaxNumber: '',
        customerCity: '',
        customerState: '',
        customerType: '',
        customerZipcode: '',
        customerTelephone: '',
        customerEmail: '',
        customerLanguage: '',
        customerDebit: 0,
        customerCredit: 0,
      };
    case INPUT_CUSTOMER_NAME:
      return {
        ...state,
        customerName: action.payload,
      };
    case INPUT_CUSTOMER_ADDRESS:
      return {
        ...state,
        customerAddress: action.payload,
      };
    case INPUT_CUSTOMER_BANK_ACCOUNT:
      return {
        ...state,
        customerBankAccount: action.payload,
      };
    case INPUT_CUSTOMER_TAX_NUMBER:
      return {
        ...state,
        customerTaxNumber: action.payload,
      };
    case INPUT_CUSTOMER_CITY:
      return {
        ...state,
        customerCity: action.payload,
      };
    case INPUT_CUSTOMER_STATE:
      return {
        ...state,
        customerState: action.payload,
      };
    case INPUT_CUSTOMER_ZIP_CODE:
      return {
        ...state,
        customerZipcode: action.payload,
      };
    case INPUT_CUSTOMER_TYPE:
      return {
        ...state,
        customerType: action.payload,
      };
    case INPUT_CUSTOMER_TELEPHONE:
      return {
        ...state,
        customerTelephone: action.payload,
      };
    case INPUT_CUSTOMER_EMAIL:
      return {
        ...state,
        customerEmail: action.payload,
      };
    case INPUT_CUSTOMER_LANGUAGE:
      return {
        ...state,
        customerLanguage: action.payload,
      };
    case INPUT_CUSTOMER_CURRENCY:
      return {
        ...state,
        customerCurrency: action.payload,
      };
    default:
      return state;
  }
};
