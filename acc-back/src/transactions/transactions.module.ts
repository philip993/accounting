import { Module } from '@nestjs/common';
// Database
import { DatabaseModule } from 'src/database/database.module';
// Transactions
import { transactionsProviders } from './transactions.providers';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TransactionsController],
  providers: [...transactionsProviders, TransactionsService],
})
export class TransactionsModule {}
