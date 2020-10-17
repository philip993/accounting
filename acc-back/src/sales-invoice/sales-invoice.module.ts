import { Module } from '@nestjs/common';
// Database
import { DatabaseModule } from 'src/database/database.module';
import { SalesInvoiceController } from './sales-invoice.controller';
import { SalesInvoiceService } from './sales-invoice.service';
import { salesInvoiceProviders } from './sales-invoice.providers';

// Invoice

@Module({
  imports: [DatabaseModule],
  controllers: [SalesInvoiceController],
  providers: [...salesInvoiceProviders, SalesInvoiceService],
})
export class SalesInvoiceModule {}
