import { combineReducers } from 'redux';

import { ChartAccountsReducer } from '../components/ChartAccounts/ChartAccountsReducer';
import { JournalReducer } from '../components/Journal/JournalReducer';
import { VendorReducer } from '../components/Vendor/VendorReducer';
import { CreateVendorReducer } from '../components/CreateVendor/CreateVendorReducer';
import { InvoiceReducer } from '../components/Invoice/InvoiceReducer';
import { CreateInvoiceReducer } from '../components/CreateInvoice/CreateInvoiceReducer';

const rootReducer = combineReducers({
  ChartAccountsReducer,
  JournalReducer,
  VendorReducer,
  CreateVendorReducer,
  InvoiceReducer,
  CreateInvoiceReducer,
});

export default rootReducer;
