import {
  SUCCESS_CREATE_VENDOR,
  FAILURE_CREATE_VENDOR,
  INPUT_VENDOR_NAME,
  INPUT_VENDOR_ADDRESS,
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
    case INPUT_VENDOR_NAME:
      return {
        ...state,
        vendorName: action.payload,
      };
    case INPUT_VENDOR_ADDRESS:
      return {
        ...state,
        vendorAddress: action.payload,
      };
    default:
      return state;
  }
};
