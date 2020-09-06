import { Connection } from 'typeorm';
import { ACCOUNTS_REPOSITORY, DATABASE_CONNECTION } from '../constats/constats';
import { Accounts } from './accounts.entity';

export const accountProviders = [
  {
    provide: ACCOUNTS_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Accounts),
    inject: [DATABASE_CONNECTION],
  },
];
