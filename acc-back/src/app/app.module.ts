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

@Module({
  imports: [
    DatabaseModule,
    AccountsModule,
    TransactionsModule,
    VendorModule,
    InvoiceModule,
  ],
  controllers: [
    AppController,
    AccountsController,
    TransactionsController,
    VendorController,
    InvoiceController,
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
  ],
})
export class AppModule {}
