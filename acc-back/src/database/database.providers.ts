import { createConnection } from 'typeorm';
import { DATABASE_CONNECTION } from '../constats/constats';
import * as dotenv from 'dotenv';
dotenv.config();

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      }),
  },
];
