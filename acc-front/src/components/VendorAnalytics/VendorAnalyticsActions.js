import {
  FAILURE_GET_VENDOR_ANALYTICS,
  INPUT_FILTER_END_DATE,
  INPUT_FILTER_START_DATE,
  INPUT_FILTER_VENDOR_CODE,
  RESET_SEARCH_FIELDS,
  SUCCESS_GET_VENDOR_ANALYTICS,
} from './VendorAnalyticsActionTypes';
import axios from 'axios';

// request
export const requestGetVendorAnalytics = () => {
  return (dispatch, getState) => {
    let { vendorFilter } = getState().VendorAnalyticsReducer;
    let id = vendorFilter;
    return axios
      .get(`http://localhost:4000/vendor/${id}`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_GET_VENDOR_ANALYTICS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_GET_VENDOR_ANALYTICS,
        });
      });
  };
};

// filter
export const inputFilterVendorCode = (e) => {
  return {
    type: INPUT_FILTER_VENDOR_CODE,
    payload: e,
  };
};

export const inputFilterStartDate = (e) => {
  return {
    type: INPUT_FILTER_START_DATE,
    payload: e,
  };
};

export const inputFilterEndDate = (e) => {
  return {
    type: INPUT_FILTER_END_DATE,
    payload: e,
  };
};

// reset
export const resetSearchFields = (e) => {
  return {
    type: RESET_SEARCH_FIELDS,
  };
};
