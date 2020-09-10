import {
  SUCCESS_CREATE_VENDOR,
  FAILURE_CREATE_VENDOR,
} from './CreateVendorActionTypes';

const initialState = {
  newVendor: [],
  newVendorError: null,
  vendorName: '',
  vendorAddress: '',
  vendorDebit: 0,
  vendorCredit: 0,
};

export const CreateVendorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_CREATE_VENDOR:
      return {
        ...state,
        newVendor: action.payload,
        newVendorError: false,
        vendorName: '',
        vendorAddress: '',
        vendorDebit: 0,
        vendorCredit: 0,
      };
    case FAILURE_CREATE_VENDOR:
      return {
        ...state,
        newVendor: null,
        newVendorError: true,
        vendorName: '',
        vendorAddress: '',
        vendorDebit: 0,
        vendorCredit: 0,
      };
    default:
      return state;
  }
};
