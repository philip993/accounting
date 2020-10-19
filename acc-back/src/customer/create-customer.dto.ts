import { Customer } from './customer.entity';
import { SalesInvoice } from 'src/sales-invoice/sales-invoice.entity';
import { Transactions } from 'src/transactions/transactions.entity';

export class CreateCustomerDto {
  customerId: number;
  customerName: string;
  customerAddress: string;
  customerCity: string;
  customerZipcode: string;
  customerState: string;
  customerType: string;
  customerTaxNumber: string;
  customerBankAccount: string;
  customerEmail: string;
  customerTelephone: string;
  customerLanguage: string;
  customerCurrency: string;
  customerDebit: number;
  customerCredit: number;
  saleinvoice: SalesInvoice[];
  xsales: Transactions[];
}
