import {
  SUCCESS_GET_ALL_VENDORS,
  FAILURE_GET_ALL_VENDORS,
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
