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

@Module({
  imports: [DatabaseModule, AccountsModule, TransactionsModule],
  controllers: [AppController, AccountsController, TransactionsController],
  providers: [
    AppService,
    AccountsService,
    ...accountProviders,
    TransactionsService,
    ...transactionsProviders,
  ],
})
export class AppModule {}
