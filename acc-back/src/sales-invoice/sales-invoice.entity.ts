import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Customer } from 'src/customer/customer.entity';
import { Transactions } from 'src/transactions/transactions.entity';

@Entity({ name: 'salesinvoices' })
export class SalesInvoice {
  @PrimaryGeneratedColumn({ name: 'sales_invoice_id' })
  salesInvoiceId: number;

  @Column({ name: 'sales_invoice_customer_FK' })
  salesInvoiceCustomerFK: number;

  @Column({ name: 'sales_invoice_number' })
  salesInvoiceNumber: string;

  @Column({ name: 'sales_invoice_date' })
  salesInvoiceDate: string;

  @Column({ name: 'sales_invoice_due' })
  salesInvoiceDue: string;

  @Column({ name: 'sales_invoice_total' })
  salesInvoiceTotal: string;

  @ManyToOne(
    type => Customer,
    customer => customer.saleinvoice,
  )
  @JoinColumn({ name: 'sales_invoice_customer_FK' })
  customer: Customer;

  @OneToMany(
    type => Transactions,
    salesinvoice => salesinvoice.transactionsales,
  )
  salesinvoice: Transactions[];
}
