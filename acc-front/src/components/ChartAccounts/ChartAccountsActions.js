import {
  SUCCESS_GET_CHART_OF_ACCOUNTS,
  FAILURE_GET_CHART_OF_ACCOUNTS,
} from './ChartAccountsActionTypes';
import axios from 'axios';

// request
export const requestGetChartOfAccounts = () => {
  return (dispatch, getState) => {
    return axios
      .get(`http://localhost:4000/accounts`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_GET_CHART_OF_ACCOUNTS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_GET_CHART_OF_ACCOUNTS,
        });
      });
  };
};
