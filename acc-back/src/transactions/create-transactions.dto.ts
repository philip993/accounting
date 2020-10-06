import { Accounts } from 'src/accounts/accounts.entity';
import { Vendor } from 'src/vendor/vendor.entity';
import { Transactions } from './transactions.entity';
import { Invoice } from 'src/invoice/invoice.entity';
import { Customer } from 'src/customer/customer.entity';

export class CreateTransactionsDto {
  transactionId: number;
  transactionFK: number;
  transactionLinesFK: number;
  transactionInvoiceFK: number;
  transactionDescription: string;
  transactionDate: string;
  transactionDebit: number;
  transactionCredit: number;
  accounts: Array<Accounts[]>;
  invoicelines: Vendor;
  saleslines: Customer;
  transactionlines: Invoice[];
}
