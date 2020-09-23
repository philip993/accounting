import {
  SUCCESS_GET_ALL_VENDORS,
  FAILURE_GET_ALL_VENDORS,
  SUCCESS_GET_ONE_VENDOR,
  FAILURE_GET_ONE_VENDOR,
  SELECT_ONE_VENDOR,
} from './VendorActionTypes';
import axios from 'axios';

// request Get
export const requestGetAllVendors = () => {
  return (dispatch, getState) => {
    return axios
      .get(`http://localhost:4000/vendor`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_GET_ALL_VENDORS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_GET_ALL_VENDORS,
        });
      });
  };
};

export const requestGetOneVendor = () => {
  return (dispatch, getState) => {
    let { selectedVendor } = getState().VendorReducer;
    let id = selectedVendor.vendorId;
    return axios
      .get(`http://localhost:4000/vendor/${id}`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_GET_ONE_VENDOR,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_GET_ONE_VENDOR,
        });
      });
  };
};

// select
export const selectOneVendor = (e) => {
  return {
    type: SELECT_ONE_VENDOR,
    payload: e,
  };
};
