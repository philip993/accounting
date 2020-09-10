import {
  SUCCESS_GET_ALL_VENDORS,
  FAILURE_GET_ALL_VENDORS,
} from './VendorActionTypes';

const initialState = {
  allVendors: [],
  allVendorsError: null,
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
    default:
      return state;
  }
};
