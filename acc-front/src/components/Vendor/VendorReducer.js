import {
  SUCCESS_GET_ALL_VENDORS,
  FAILURE_GET_ALL_VENDORS,
  SUCCESS_GET_ONE_VENDOR,
  FAILURE_GET_ONE_VENDOR,
  SELECT_ONE_VENDOR,
} from './VendorActionTypes';

const initialState = {
  allVendors: [],
  allVendorsError: null,
  oneVendor: [],
  oneVendorError: null,
  selectedVendor: [],
};

export const VendorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_ALL_VENDORS:
      return {
        ...state,
        allVendors: action.payload,
        allVendorsError: false,
      };
    case FAILURE_GET_ALL_VENDORS:
      return {
        ...state,
        allVendors: null,
        allVendorsError: true,
      };
    case SUCCESS_GET_ONE_VENDOR:
      return {
        ...state,
        oneVendor: [action.payload],
        oneVendorError: false,
      };
    case FAILURE_GET_ONE_VENDOR:
      return {
        ...state,
        oneVendor: null,
        oneVendorError: true,
      };
    case SELECT_ONE_VENDOR:
      return {
        ...state,
        selectedVendor: action.payload,
      };
    default:
      return state;
  }
};
