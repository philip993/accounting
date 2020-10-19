import { Accounts } from 'src/accounts/accounts.entity';
import { Vendor } from 'src/vendor/vendor.entity';
import { Transactions } from './transactions.entity';
import { Invoice } from 'src/invoice/invoice.entity';
import { Customer } from 'src/customer/customer.entity';
import { SalesInvoice } from 'src/sales-invoice/sales-invoice.entity';
import { PaymentJournal } from 'src/payment-journal/payment-journal.entity';

export class CreateTransactionsDto {
  transactionId: number;
  transactionFK: number;
  transactionLinesFK: number;
  transactionCustomerFK: number;
  transactionInvoiceFK: number;
  transactionSalesinvoiceFK: number;
  transactionJournalFK: number;
  transactionDescription: string;
  transactionDate: string;
  transactionDebit: number;
  transactionCredit: number;
  accounts: Array<Accounts[]>;
  invoicelines: Vendor;
  saleslines: Customer;
  transactionlines: Invoice[];
  transactionsales: SalesInvoice[];
  journalslines: PaymentJournal[];
}
