import { Connection, Repository } from 'typeorm';
import { INVOICE_REPOSITORY, DATABASE_CONNECTION } from '../constats/constats';
import { Invoice } from './invoice.entity';

export const invoiceProviders = [
  {
    provide: INVOICE_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Invoice),
    inject: [DATABASE_CONNECTION],
  },
];
