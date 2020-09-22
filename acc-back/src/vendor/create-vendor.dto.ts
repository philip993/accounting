import { Transactions } from '../transactions/transactions.entity';
import { Invoice } from 'src/invoice/invoice.entity';

export class CreateVendorDto {
  vendorId: number;
  vendorName: string;
  vendorAddress: string;
  vendorTaxNumber: string;
  vendorBankAccount: string;
  vendorDebit: number;
  vendorCredit: number;
  invoice: Invoice;
}
