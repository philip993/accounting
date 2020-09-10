import { combineReducers } from "redux";

import { ChartAccountsReducer } from "../components/ChartAccounts/ChartAccountsReducer";
import { JournalReducer } from "../components/Journal/JournalReducer";
import { VendorReducer } from "../components/Vendor/VendorReducer";
import { CreateVendorReducer } from "../components/CreateVendor/CreateVendorReducer";

const rootReducer = combineReducers({
  ChartAccountsReducer,
  JournalReducer,
  VendorReducer,
  CreateVendorReducer,
});

export default rootReducer;
