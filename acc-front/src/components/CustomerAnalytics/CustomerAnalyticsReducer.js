import {
  FAILURE_GET_CUSTOMER_ANALYTICS,
  INPUT_FILTER_END_DATE,
  INPUT_FILTER_START_DATE,
  INPUT_FILTER_CUSTOMER_CODE,
  RESET_SEARCH_FIELDS,
  SUCCESS_GET_CUSTOMER_ANALYTICS,
} from './CustomerAnalyticsActionTypes';

const initialState = {
  customerAnalytics: [],
  customerAnalyticsError: null,
  customerFilter: '',
  startDateFilter: '',
  endDateFilter: '',
};

export const CustomerAnalyticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_CUSTOMER_ANALYTICS:
      return {
        ...state,
        customerAnalytics: [action.payload],
        customerAnalyticsError: false,
      };
    case FAILURE_GET_CUSTOMER_ANALYTICS:
      return {
        ...state,
        customerAnalytics: null,
        customerAnalyticsError: true,
      };
    case INPUT_FILTER_CUSTOMER_CODE:
      return {
        ...state,
        customerFilter: action.payload,
      };
    case INPUT_FILTER_START_DATE:
      return {
        ...state,
        startDateFilter: action.payload,
      };
    case INPUT_FILTER_END_DATE:
      return {
        ...state,
        endDateFilter: action.payload,
      };
    case RESET_SEARCH_FIELDS:
      return {
        ...state,
        customerFilter: '',
        startDateFilter: '',
        endDateFilter: '',
      };
    default:
      return state;
  }
};
