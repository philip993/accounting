import { Transactions } from '../transactions/transactions.entity';
import { Invoice } from 'src/invoice/invoice.entity';

export class CreateVendorDto {
  vendorId: number;
  // vendorFK: number;
  vendorName: string;
  vendorAddress: string;
  vendorDebit: number;
  vendorCredit: number;
  invoice: Invoice;
  transactions: Array<Transactions[]>;
}
