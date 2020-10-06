import { Connection } from 'typeorm';
import { CUSTOMER_REPOSITORY, DATABASE_CONNECTION } from '../constats/constats';
import { Customer } from './customer.entity';

export const customerProviders = [
  {
    provide: CUSTOMER_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Customer),
    inject: [DATABASE_CONNECTION],
  },
];
