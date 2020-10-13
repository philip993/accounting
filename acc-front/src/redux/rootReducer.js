import { combineReducers } from 'redux';

import { ChartAccountsReducer } from '../components/ChartAccounts/ChartAccountsReducer';
import { JournalReducer } from '../components/Journal/JournalReducer';
import { VendorReducer } from '../components/Vendor/VendorReducer';
import { CreateVendorReducer } from '../components/CreateVendor/CreateVendorReducer';
import { InvoiceReducer } from '../components/Invoice/InvoiceReducer';
import { CreateInvoiceReducer } from '../components/CreateInvoice/CreateInvoiceReducer';
import { TransactionsReducer } from '../components/Transactions/TransactionsReducer';
import { DetailInvoiceReducer } from '../components/DetailInvoice/DetailInvoiceReducer';
import { SalesInvoiceReducer } from '../components/SalesInvoice/SalesInvoiceReducer';
import { CustomerReducer } from '../components/Customer/CustomerReducer';
import { CreateSalesInvoiceReducer } from '../components/CreateSalesInvoice/CreateSalesInvoiceReducer';

const rootReducer = combineReducers({
  ChartAccountsReducer,
  JournalReducer,
  VendorReducer,
  CreateVendorReducer,
  InvoiceReducer,
  CreateInvoiceReducer,
  TransactionsReducer,
  DetailInvoiceReducer,
  SalesInvoiceReducer,
  CustomerReducer,
  CreateInvoiceReducer,
});

export default rootReducer;
