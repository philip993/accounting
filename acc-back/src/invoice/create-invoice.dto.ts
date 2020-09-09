import { Vendor } from 'src/vendor/vendor.entity';
import { Transactions } from 'src/transactions/transactions.entity';

export class CreateInvoiceDto {
  invoiceId: number;
  // invoiceFK: number;
  invoiceVendorFK: number;
  invoiceNumber: string;
  invoiceDate: string;
  invoiceDue: string;
  vendor: Vendor;
  invoices: [Array<Transactions[]>];
}
