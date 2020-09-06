import { combineReducers } from 'redux';

import { ChartAccountsReducer } from '../components/ChartAccounts/ChartAccountsReducer';
import { JournalReducer } from '../components/Journal/JournalReducer';

const rootReducer = combineReducers({
  ChartAccountsReducer,
  JournalReducer,
});

export default rootReducer;
