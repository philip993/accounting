import {
  INPUT_VENDOR_NAME,
  INPUT_VENDOR_ADDRESS,
  INPUT_VENDOR_BANK_ACCOUNT,
  INPUT_VENDOR_TAX_NUMBER,
  SUCCESS_CREATE_VENDOR,
  FAILURE_CREATE_VENDOR,
  INPUT_VENDOR_CITY,
  INPUT_VENDOR_ZIP_CODE,
  INPUT_VENDOR_TELEPHONE,
  INPUT_VENDOR_EMAIL,
  INPUT_VENDOR_LANGUAGE,
  INPUT_VENDOR_CURRENCY,
} from './CreateVendorActionTypes';
import axios from 'axios';

// request Create
export const requestCreateVendor = () => {
  return (dispatch, getState) => {
    let {
      vendorName,
      vendorAddress,
      vendorTaxNumber,
      vendorBankAccount,
      vendorCity,
      vendorZipCode,
      vendorTelephone,
      vendorEmail,
      vendorLanguage,
      vendorCurrency,
      vendorDebit,
      vendorCredit,
    } = getState().CreateVendorReducer;
    return axios
      .post(`http://localhost:4000/vendor`, {
        vendorName,
        vendorAddress,
        vendorTaxNumber,
        vendorBankAccount,
        vendorCity,
        vendorZipCode,
        vendorTelephone,
        vendorEmail,
        vendorLanguage,
        vendorCurrency,
        vendorDebit: 0,
        vendorCredit: 0,
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_CREATE_VENDOR,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_CREATE_VENDOR,
        });
      });
  };
};

// input
export const inputVendorName = (e) => {
  return {
    type: INPUT_VENDOR_NAME,
    payload: e,
  };
};

export const inputVendorAddres = (e) => {
  return {
    type: INPUT_VENDOR_ADDRESS,
    payload: e,
  };
};

export const inputVendorBankAccount = (e) => {
  return {
    type: INPUT_VENDOR_BANK_ACCOUNT,
    payload: e,
  };
};

export const inputVendorTaxNumber = (e) => {
  return {
    type: INPUT_VENDOR_TAX_NUMBER,
    payload: e,
  };
};

export const inputVendorCity = (e) => {
  return {
    type: INPUT_VENDOR_CITY,
    payload: e,
  };
};

export const inputVendorZipCode = (e) => {
  return {
    type: INPUT_VENDOR_ZIP_CODE,
    payload: e,
  };
};

export const inputVendorTelephone = (e) => {
  return {
    type: INPUT_VENDOR_TELEPHONE,
    payload: e,
  };
};

export const inputVendorEmail = (e) => {
  return {
    type: INPUT_VENDOR_EMAIL,
    payload: e,
  };
};

export const inputVendorLanguage = (e) => {
  return {
    type: INPUT_VENDOR_LANGUAGE,
    payload: e,
  };
};

export const inputVendorCurrency = (e) => {
  return {
    type: INPUT_VENDOR_CURRENCY,
    payload: e,
  };
};
