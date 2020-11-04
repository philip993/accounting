import {
  FAILURE_GET_CUSTOMER_ANALYTICS,
  INPUT_FILTER_END_DATE,
  INPUT_FILTER_START_DATE,
  INPUT_FILTER_CUSTOMER_CODE,
  RESET_SEARCH_FIELDS,
  SUCCESS_GET_CUSTOMER_ANALYTICS,
} from './CustomerAnalyticsActionTypes';
import axios from 'axios';

// request
export const requestGetCustomerAnalytics = () => {
  return (dispatch, getState) => {
    let { customerFilter } = getState().CustomerAnalyticsReducer;
    let id = customerFilter;
    return axios
      .get(`http://localhost:4000/customer/${id}`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_GET_CUSTOMER_ANALYTICS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_GET_CUSTOMER_ANALYTICS,
        });
      });
  };
};

// filter
export const inputFilterCustomerCode = (e) => {
  return {
    type: INPUT_FILTER_CUSTOMER_CODE,
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
