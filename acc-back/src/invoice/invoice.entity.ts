import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Vendor } from 'src/vendor/vendor.entity';

@Entity({ name: 'invoices' })
export class Invoice {
  @PrimaryGeneratedColumn({ name: 'invoice_id' })
  invoiceId: number;

  @Column({ name: 'invoice_FK' })
  invoiceFK: number;

  @Column({ name: 'invoice_vendor_FK' })
  invoiceVendorFK: number;

  @Column({ name: 'invoice_number' })
  invoiceNumber: string;

  @Column({ name: 'invoice_data' })
  invoiceDate: string;

  @Column({ name: 'invoice_due' })
  invoiceDue: string;

  // O:O with Vendor
  @OneToOne(
    type => Vendor,
    // invoice => invoice.vendorId
  )
  @JoinColumn({ name: 'invoice_FK' })
  vendor: Vendor;
  // O:M with Transactions
}
