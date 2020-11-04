import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  ManyToOne,
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

  @Column({ name: 'invoice_posted_number' })
  invoicePostedNumber: string;

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

  // M:O with Vendor
  @ManyToOne(
    type => Vendor,
    vendor => vendor.invoice,
  )
  @JoinColumn({ name: 'invoice_vendor_FK' })
  vendor: Vendor;
}
