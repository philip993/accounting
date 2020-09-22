import {
  INPUT_VENDOR_NAME,
  INPUT_VENDOR_ADDRESS,
  INPUT_VENDOR_BANK_ACCOUNT,
  INPUT_VENDOR_TAX_NUMBER,
  SUCCESS_CREATE_VENDOR,
  FAILURE_CREATE_VENDOR,
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
      vendorDebit,
      vendorCredit,
    } = getState().CreateVendorReducer;
    return axios
      .post(`http://localhost:4000/vendor`, {
        vendorName,
        vendorAddress,
        vendorTaxNumber,
        vendorBankAccount,
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
