import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
  OneToOne,
  ManyToMany,
} from 'typeorm';
import { Accounts } from '../accounts/accounts.entity';
import { Invoice } from 'src/invoice/invoice.entity';
import { Vendor } from 'src/vendor/vendor.entity';
import { Customer } from 'src/customer/customer.entity';
import { SalesInvoice } from 'src/sales-invoice/sales-invoice.entity';

@Entity({ name: 'transactions' })
export class Transactions {
  @PrimaryGeneratedColumn({ name: 'transaction_id' })
  transactionId: number;
  // account id
  @Column({ name: 'transaction_FK' })
  transactionFK: number;
  // vendor id
  @Column({ name: 'transaction_lines_FK' })
  transactionLinesFK: number;

  @Column({ name: 'transaction_customer_FK' })
  transactionCustomerFK: number;

  @Column({ name: 'transaction_invoice_FK' })
  transactionInvoiceFK: number;

  @Column({ name: 'transaction_salesinvoice_FK' })
  transactionSalesinvoiceFK: number;

  @Column({ name: 'transaction_description' })
  transactionDescription: string;

  @Column({ name: 'transaction_date' })
  transactionDate: string;

  @Column({ name: 'transaction_debit' })
  transactionDebit: number;

  @Column({ name: 'transaction_credit' })
  transactionCredit: number;

  @ManyToOne(
    type => Accounts,
    accounts => accounts.transactions,
  )
  @JoinColumn({ name: 'transaction_FK' })
  accounts: Array<Accounts[]>;

  @ManyToOne(type => Vendor)
  @JoinColumn({ name: 'transaction_lines_FK' })
  invoicelines: Vendor;

  @ManyToOne(type => Customer)
  @JoinColumn({ name: 'transaction_customer_FK' })
  saleslines: Customer;

  @ManyToOne(
    type => Invoice,
    transactionlines => transactionlines.invoices,
  )
  @JoinColumn({ name: 'transaction_invoice_FK' })
  transactionlines: Invoice[];

  @ManyToOne(
    type => SalesInvoice,
    transactionsales => transactionsales.salesinvoice,
  )
  @JoinColumn({ name: 'transaction_salesinvoice_FK' })
  transactionsales: SalesInvoice[];
}
