import { Connection } from 'typeorm';
import {
  SALES_INVOICE_REPOSITORY,
  DATABASE_CONNECTION,
} from '../constats/constats';
import { SalesInvoice } from './sales-invoice.entity';

// export const salesInvoiceProviders = [
//   {
//     providers: SALES_INVOICE_REPOSITORY,
//     useFactory: (connection: Connection) =>
//       connection.getRepository(SalesInvoice),
//     inject: DATABASE_CONNECTION,
//   },
// ];

export const salesInvoiceProviders = [
  {
    provide: SALES_INVOICE_REPOSITORY,
    useFactory: (connection: Connection) =>
      connection.getRepository(SalesInvoice),
    inject: [DATABASE_CONNECTION],
  },
];
