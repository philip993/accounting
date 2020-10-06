import { Connection } from 'typeorm';
import {
  TRANSACTIONS_REPOSITORY,
  DATABASE_CONNECTION,
} from '../constats/constats';
import { Transactions } from './transactions.entity';

export const transactionsProviders = [
  {
    provide: TRANSACTIONS_REPOSITORY,
    useFactory: (connection: Connection) =>
      connection.getRepository(Transactions),
    inject: [DATABASE_CONNECTION],
  },
];
