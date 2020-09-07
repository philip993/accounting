import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Invoice } from 'src/invoice/invoice.entity';
import { Transactions } from 'src/transactions/transactions.entity';

@Entity({ name: 'vendors' })
export class Vendor {
  @PrimaryGeneratedColumn({ name: 'vendor_id' })
  vendorId: number;

  @Column({ name: 'vendor_FK' })
  vendorFK: number;

  @Column({ name: 'vendor_name' })
  vendorName: string;

  @Column({ name: 'vendor_address' })
  vendorAddress: string;

  @Column({ name: 'vendor_debit' })
  vendorDebit: number;

  @Column({ name: 'vendor_credit' })
  vendorCredit: number;

  // relation O:O with Invoice

  // relation O:M with Transactions

  @OneToMany(
    type => Transactions,
    transactions => transactions.transactionLines,
  )
  transactions: Array<Transactions[]>;
}
