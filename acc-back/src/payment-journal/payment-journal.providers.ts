import { Connection } from 'typeorm';
import {
  PAYMENT_JOURNAL_REPOSITORY,
  DATABASE_CONNECTION,
} from '../constats/constats';
import { PaymentJournal } from './payment-journal.entity';

export const paymentJournalProviders = [
  {
    provide: PAYMENT_JOURNAL_REPOSITORY,
    useFactory: (connection: Connection) =>
      connection.getRepository(PaymentJournal),
    inject: [DATABASE_CONNECTION],
  },
];
