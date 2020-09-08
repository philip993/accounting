import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  JoinColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { Vendor } from 'src/vendor/vendor.entity';
import { Transactions } from 'src/transactions/transactions.entity';

@Entity({ name: 'invoices' })
export class Invoice {
  @PrimaryGeneratedColumn({ name: 'invoice_id' })
  invoiceId: number;
  // transactions id
  @Column({ name: 'invoice_FK' })
  invoiceFK: any;
  // vendor id
  @Column({ name: 'invoice_vendor_FK' })
  invoiceVendorFK: number;

  @Column({ name: 'invoice_number' })
  invoiceNumber: string;

  @Column({ name: 'invoice_date' })
  invoiceDate: string;

  @Column({ name: 'invoice_due' })
  invoiceDue: string;

  // O:M with Transactions
  // @OneToMany(
  //   type => Transactions,
  //   something => something.transactionlines,
  // )
  // @JoinColumn({ name: 'invoice_FK' })
  // something: [Array<Transactions[]>];

  @ManyToOne(
    type => Transactions,
    invoices => invoices.transactionlines,
  )
  @JoinColumn({ name: 'invoice_FK' })
  invoices: [Array<Transactions[]>];

  // O:O with Vendor
  @OneToOne(type => Vendor)
  @JoinColumn({ name: 'invoice_vendor_FK' })
  vendor: Vendor;

  // @ManyToMany(type => Transactions)
  // @JoinTable()
  // @JoinColumn({ name: 'invoice_FK' })
  // something: Transactions[];
}
