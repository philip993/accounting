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

  @Column({ name: 'transaction_invoice_FK' })
  transactionInvoiceFK: number;

  @Column({ name: 'transaction_description' })
  transactionDescription: string;

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

  @ManyToOne(
    type => Invoice,
    transactionlines => transactionlines.invoices,
  )
  @JoinColumn({ name: 'transaction_invoice_FK' })
  transactionlines: Invoice[];
}
