import {
  FAILURE_GET_VENDOR_ANALYTICS,
  INPUT_FILTER_END_DATE,
  INPUT_FILTER_START_DATE,
  INPUT_FILTER_VENDOR_CODE,
  RESET_SEARCH_FIELDS,
  SUCCESS_GET_VENDOR_ANALYTICS,
} from './VendorAnalyticsActionTypes';

const initialState = {
  vendorAnalytics: [],
  vendorAnalyticsError: null,
  vendorFilter: '',
  startDateFilter: '',
  endDateFilter: '',
};

export const VendorAnalyticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_VENDOR_ANALYTICS:
      return {
        ...state,
        vendorAnalytics: [action.payload],
        vendorAnalyticsError: false,
      };
    case FAILURE_GET_VENDOR_ANALYTICS:
      return {
        ...state,
        vendorAnalytics: null,
        vendorAnalyticsError: true,
      };
    case INPUT_FILTER_VENDOR_CODE:
      return {
        ...state,
        vendorFilter: action.payload,
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
        vendorFilter: '',
        startDateFilter: '',
        endDateFilter: '',
      };
    default:
      return state;
  }
};
