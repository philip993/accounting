import {
  SUCCESS_GET_ALL_CUSTOMERS,
  FAILURE_GET_ALL_CUSTOMERS,
} from './CustomerActionTypes';

const initialState = {
  allCustomers: [],
  allCustomersError: null,
};

export const CustomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_ALL_CUSTOMERS:
      return {
        ...state,
        allCustomers: action.payload,
        allCustomersError: false,
      };
    case FAILURE_GET_ALL_CUSTOMERS:
      return {
        ...state,
        allCustomers: null,
        allCustomersError: true,
      };
    default:
      return state;
  }
};
