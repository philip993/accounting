import { Transactions } from '../transactions/transactions.entity';
import { Invoice } from 'src/invoice/invoice.entity';

export class CreateVendorDto {
  vendorId: number;
  vendorName: string;
  vendorAddress: string;
  vendorCity: string;
  vendorZipCode: string;
  vendorTelephone: string;
  vendorEmail: string;
  vendorTaxNumber: string;
  vendorBankAccount: string;
  vendorLanguage: string;
  vendorCurrency: string;
  vendorDebit: number;
  vendorCredit: number;
  invoice: Invoice[];
  vendorlines: Transactions[];
}
