import { Module } from '@nestjs/common';
// Database
import { DatabaseModule } from 'src/database/database.module';
// Payment Journal
import { PaymentJournalController } from './payment-journal.controller';
import { paymentJournalProviders } from './payment-journal.providers';
import { PaymentJournalService } from './payment-journal.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PaymentJournalController],
  providers: [...paymentJournalProviders, PaymentJournalService],
})
export class PaymentJournalModule {}
