import { Vendor } from 'src/vendor/vendor.entity';
import { Transactions } from 'src/transactions/transactions.entity';

export class CreateInvoiceDto {
  invoiceId: number;
  invoiceVendorFK: number;
  invoiceNumber: string;
  invoicePostedNumber: string;
  invoiceTotal: number;
  invoiceDate: string;
  invoiceDue: string;
  vendor: Vendor;
  invoices: [Array<Transactions[]>];
}
