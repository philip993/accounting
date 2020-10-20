import {
  SUCCESS_GET_DETAIL_ACCOUNT_REPORT,
  FAILURE_GET_DETAIL_ACCOUNT_REPORT,
  INPUT_FILTER_ACCOUNT_CODE,
  INPUT_FILTER_START_DATE,
  INPUT_FILTER_END_DATE,
} from './DetailAccountReportActionTypes';
import axios from 'axios';

// request
export const requestGetDetailsAccount = () => {
  return (dispatch, getState) => {
    let {
      accountFilter,
      startDateFilter,
      endDateFilter,
    } = getState().DetailAccountReportReducer;
    let id = accountFilter;
    return axios
      .get(`http://localhost:4000/accounts/${id}`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_GET_DETAIL_ACCOUNT_REPORT,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_GET_DETAIL_ACCOUNT_REPORT,
        });
      });
  };
};

// filter
export const inputFilterAccountCode = (e) => {
  return {
    type: INPUT_FILTER_ACCOUNT_CODE,
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
