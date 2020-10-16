import {
  INPUT_CUSTOMER_NAME,
  INPUT_CUSTOMER_ADDRESS,
  INPUT_CUSTOMER_BANK_ACCOUNT,
  INPUT_CUSTOMER_TAX_NUMBER,
  SUCCESS_CREATE_CUSTOMER,
  FAILURE_CREATE_CUSTOMER,
  INPUT_CUSTOMER_CITY,
  INPUT_CUSTOMER_ZIP_CODE,
  INPUT_CUSTOMER_TELEPHONE,
  INPUT_CUSTOMER_EMAIL,
  INPUT_CUSTOMER_LANGUAGE,
  INPUT_CUSTOMER_CURRENCY,
  INPUT_CUSTOMER_STATE,
  INPUT_CUSTOMER_TYPE,
} from './CreateCustomerActionTypes';
import axios from 'axios';

// request Create
export const requestCreateCustomer = () => {
  return (dispatch, getState) => {
    let {
      customerName,
      customerAddress,
      customerTaxNumber,
      customerBankAccount,
      customerCity,
      customerState,
      customerZipcode,
      customerType,
      customerTelephone,
      customerEmail,
      customerLanguage,
      customerCurrency,
      customerDebit,
      customerCredit,
    } = getState().CreateCustomerReducer;
    return axios
      .post(`http://localhost:4000/customer`, {
        customerName,
        customerAddress,
        customerTaxNumber,
        customerBankAccount,
        customerCity,
        customerState,
        customerZipcode,
        customerType,
        customerTelephone,
        customerEmail,
        customerLanguage,
        customerCurrency,
        customerDebit: 0,
        customerCredit: 0,
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_CREATE_CUSTOMER,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_CREATE_CUSTOMER,
        });
      });
  };
};

// input
export const inputCustomerName = (e) => {
  return {
    type: INPUT_CUSTOMER_NAME,
    payload: e,
  };
};

export const inputCustomerAddres = (e) => {
  return {
    type: INPUT_CUSTOMER_ADDRESS,
    payload: e,
  };
};

export const inputCustomerBankAccount = (e) => {
  return {
    type: INPUT_CUSTOMER_BANK_ACCOUNT,
    payload: e,
  };
};

export const inputCustomerTaxNumber = (e) => {
  return {
    type: INPUT_CUSTOMER_TAX_NUMBER,
    payload: e,
  };
};

export const inputCustomerCity = (e) => {
  return {
    type: INPUT_CUSTOMER_CITY,
    payload: e,
  };
};

export const inputCustomerState = (e) => {
  return {
    type: INPUT_CUSTOMER_STATE,
    payload: e,
  };
};

export const inputCustomerZipcode = (e) => {
  return {
    type: INPUT_CUSTOMER_ZIP_CODE,
    payload: e,
  };
};

export const inputCustomerType = (e) => {
  return {
    type: INPUT_CUSTOMER_TYPE,
    payload: e,
  };
};

export const inputCustomerTelephone = (e) => {
  return {
    type: INPUT_CUSTOMER_TELEPHONE,
    payload: e,
  };
};

export const inputCustomerEmail = (e) => {
  return {
    type: INPUT_CUSTOMER_EMAIL,
    payload: e,
  };
};

export const inputCustomerLanguage = (e) => {
  return {
    type: INPUT_CUSTOMER_LANGUAGE,
    payload: e,
  };
};

export const inputCustomerCurrency = (e) => {
  return {
    type: INPUT_CUSTOMER_CURRENCY,
    payload: e,
  };
};
