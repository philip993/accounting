import { Module } from '@nestjs/common';
// App
import { AppController } from './app.controller';
import { AppService } from './app.service';
// Database
import { DatabaseModule } from '../database/database.module';
// Accounts
import { AccountsController } from '../accounts/accounts.controller';
import { AccountsService } from '../accounts/accounts.service';
import { accountProviders } from '../accounts/account.providers';
import { AccountsModule } from 'src/accounts/accounts.module';
// Transactions
import { TransactionsController } from '../transactions/transactions.controller';
import { TransactionsModule } from '../transactions/transactions.module';
import { TransactionsService } from '../transactions/transactions.service';
import { transactionsProviders } from '../transactions/transactions.providers';
// Vendor
import { VendorModule } from 'src/vendor/vendor.module';
import { VendorController } from 'src/vendor/vendor.controller';
import { VendorService } from 'src/vendor/vendor.service';
import { vendorProviders } from 'src/vendor/vendor.providers';
// Invoice
import { InvoiceController } from 'src/invoice/invoice.controller';
import { InvoiceService } from 'src/invoice/invoice.service';
import { invoiceProviders } from 'src/invoice/invoice.providers';
import { InvoiceModule } from 'src/invoice/invoice.module';
// Customer
import { CustomerController } from 'src/customer/customer.controller';
import { CustomerService } from 'src/customer/customer.service';
import { customerProviders } from 'src/customer/customer.providers';
import { CustomerModule } from 'src/customer/customer.module';
// Sales Invoice
import { SalesInvoiceController } from 'src/sales-invoice/sales-invoice.controller';
import { SalesInvoiceService } from 'src/sales-invoice/sales-invoice.service';
import { salesInvoiceProviders } from 'src/sales-invoice/sales-invoice.providers';
import { SalesInvoiceModule } from 'src/sales-invoice/sales-invoice.module';
// Payment Journal
import { PaymentJournalController } from 'src/payment-journal/payment-journal.controller';
import { PaymentJournalService } from 'src/payment-journal/payment-journal.service';
import { paymentJournalProviders } from 'src/payment-journal/payment-journal.providers';
import { PaymentJournalModule } from 'src/payment-journal/payment-journal.module';

@Module({
  imports: [
    DatabaseModule,
    AccountsModule,
    TransactionsModule,
    VendorModule,
    InvoiceModule,
    CustomerModule,
    SalesInvoiceModule,
    PaymentJournalModule,
  ],
  controllers: [
    AppController,
    AccountsController,
    TransactionsController,
    VendorController,
    InvoiceController,
    CustomerController,
    SalesInvoiceController,
    PaymentJournalController,
  ],
  providers: [
    AppService,
    AccountsService,
    ...accountProviders,
    TransactionsService,
    ...transactionsProviders,
    VendorService,
    ...vendorProviders,
    InvoiceService,
    ...invoiceProviders,
    CustomerService,
    ...customerProviders,
    SalesInvoiceService,
    ...salesInvoiceProviders,
    PaymentJournalService,
    ...paymentJournalProviders,
  ],
})
export class AppModule {}
