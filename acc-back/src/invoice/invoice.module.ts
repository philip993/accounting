import { Module } from '@nestjs/common';
// Database
import { DatabaseModule } from 'src/database/database.module';
// Invoice
import { InvoiceController } from './invoice.controller';
import { invoiceProviders } from './invoice.providers';
import { InvoiceService } from './invoice.service';

@Module({
  imports: [DatabaseModule],
  controllers: [InvoiceController],
  providers: [...invoiceProviders, InvoiceService],
})
export class InvoiceModule {}
