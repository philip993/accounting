import { Connection } from 'typeorm';
import { VENDOR_REPOSITORY, DATABASE_CONNECTION } from '../constats/constats';
import { Vendor } from './vendor.entity';

export const vendorProviders = [
  {
    provide: VENDOR_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Vendor),
    inject: [DATABASE_CONNECTION],
  },
];
