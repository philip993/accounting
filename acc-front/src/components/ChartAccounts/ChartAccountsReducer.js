import {
  SUCCESS_GET_CHART_OF_ACCOUNTS,
  FAILURE_GET_CHART_OF_ACCOUNTS,
} from './ChartAccountsActionTypes';

const initialState = {
  accounts: [],
  accountsError: null,
};

export const ChartAccountsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_CHART_OF_ACCOUNTS:
      return {
        ...state,
        accounts: action.payload,
        accountsError: false,
      };
    case FAILURE_GET_CHART_OF_ACCOUNTS:
      return {
        ...state,
        accounts: null,
        accountsError: true,
      };
    default:
      return state;
  }
};
