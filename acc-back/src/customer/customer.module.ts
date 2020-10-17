import { Module } from '@nestjs/common';
// Database
import { DatabaseModule } from '../database/database.module';
import { customerProviders } from './customer.providers';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
// Customer

@Module({
  imports: [DatabaseModule],
  controllers: [CustomerController],
  providers: [...customerProviders, CustomerService],
})
export class CustomerModule {}
