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
import { DetailsSalesInvoiceReducer } from '../components/DetailsSalesInvoice/DetailsSalesInvoiceReducer';
import { CreateCustomerReducer } from '../components/CreateCustomer/CreateCustomerReducer';
import { CreatePaymentJournalReducer } from '../components/CreatePaymentJournal/CreatePaymentJournalReducer';
import { PaymentTransactionReducer } from '../components/PaymentTransaction/PaymentTransactionReducer';

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
  CreateSalesInvoiceReducer,
  DetailsSalesInvoiceReducer,
  CreateCustomerReducer,
  CreatePaymentJournalReducer,
  PaymentTransactionReducer,
});

export default rootReducer;
