import {
  SUCCESS_GET_ALL_CUSTOMERS,
  FAILURE_GET_ALL_CUSTOMERS,
  SUCCESS_GET_ONE_CUSTOMER,
  FAILURE_GET_ONE_CUSTOMER,
  SELECT_ONE_CUSTOMER,
} from './CustomerActionTypes';
import axios from 'axios';

// request
export const requestGetAllCustomers = () => {
  return (dispatch, getState) => {
    return axios
      .get(`http://localhost:4000/customer`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_GET_ALL_CUSTOMERS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_GET_ALL_CUSTOMERS,
        });
      });
  };
};

// request
export const requestGetOneCustomer = () => {
  return (dispatch, getState) => {
    let { selectedCustomer } = getState().CustomerReducer;
    let id = selectedCustomer.customerId;
    return axios
      .get(`http://localhost:4000/customer/${id}`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_GET_ONE_CUSTOMER,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_GET_ONE_CUSTOMER,
        });
      });
  };
};

// select
export const selectOneCustomer = (e) => {
  return {
    type: SELECT_ONE_CUSTOMER,
    payload: e,
  };
};
