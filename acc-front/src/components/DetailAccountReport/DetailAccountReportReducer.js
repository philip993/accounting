import {
  SUCCESS_GET_DETAIL_ACCOUNT_REPORT,
  FAILURE_GET_DETAIL_ACCOUNT_REPORT,
  INPUT_FILTER_ACCOUNT_CODE,
  INPUT_FILTER_START_DATE,
  INPUT_FILTER_END_DATE,
} from './DetailAccountReportActionTypes';

const initialState = {
  accountReport: [],
  accountReportError: null,
  accountFilter: '',
  startDateFilter: '',
  endDateFilter: '',
};

export const DetailAccountReportReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_DETAIL_ACCOUNT_REPORT:
      return {
        ...state,
        accountReport: [action.payload],
        accountReportError: false,
      };
    case FAILURE_GET_DETAIL_ACCOUNT_REPORT:
      return {
        ...state,
        accountReport: null,
        accountReportError: false,
      };
    case INPUT_FILTER_ACCOUNT_CODE:
      return {
        ...state,
        accountFilter: action.payload,
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
    default:
      return state;
  }
};
