import {
  INPUT_VENDOR_NAME,
  INPUT_VENDOR_ADDRESS,
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
      vendorDebit,
      vendorCredit,
    } = getState().CreateVendorReducer;
    return axios
      .post(`http://localhost:4000/vendor`, {
        vendorName,
        vendorAddress,
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
