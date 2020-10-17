import {
  SUCCESS_GET_ALL_CUSTOMERS,
  FAILURE_GET_ALL_CUSTOMERS,
  SUCCESS_GET_ONE_CUSTOMER,
  FAILURE_GET_ONE_CUSTOMER,
  SELECT_ONE_CUSTOMER,
} from './CustomerActionTypes';

const initialState = {
  allCustomers: [],
  allCustomersError: null,
  oneCustomer: [],
  oneCustomerError: null,
  selectedCustomer: [],
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
    case SUCCESS_GET_ONE_CUSTOMER:
      return {
        ...state,
        oneCustomer: [action.payload],
        oneCustomerError: false,
      };
    case FAILURE_GET_ONE_CUSTOMER:
      return {
        ...state,
        oneCustomer: null,
        oneCustomerError: true,
      };
    case SELECT_ONE_CUSTOMER:
      return {
        ...state,
        selectedCustomer: action.payload,
      };
    default:
      return state;
  }
};
