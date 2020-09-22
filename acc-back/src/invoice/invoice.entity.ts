import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Vendor } from 'src/vendor/vendor.entity';
import { Transactions } from 'src/transactions/transactions.entity';

@Entity({ name: 'invoices' })
export class Invoice {
  @PrimaryGeneratedColumn({ name: 'invoice_id' })
  invoiceId: number;
  // vendor id
  @Column({ name: 'invoice_vendor_FK' })
  invoiceVendorFK: number;

  @Column({ name: 'invoice_number' })
  invoiceNumber: string;

  @Column({ name: 'invoice_total' })
  invoiceTotal: number;

  @Column({ name: 'invoice_date' })
  invoiceDate: string;

  @Column({ name: 'invoice_due' })
  invoiceDue: string;

  // O:M with Transactions
  @OneToMany(
    type => Transactions,
    invoices => invoices.transactionlines,
  )
  invoices: [Array<Transactions[]>];

  // O:O with Vendor
  @OneToOne(type => Vendor)
  @JoinColumn({ name: 'invoice_vendor_FK' })
  vendor: Vendor;
}
