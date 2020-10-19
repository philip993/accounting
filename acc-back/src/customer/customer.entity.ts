import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Invoice } from 'src/invoice/invoice.entity';
import { SalesInvoice } from 'src/sales-invoice/sales-invoice.entity';
import { Transactions } from 'src/transactions/transactions.entity';

@Entity({ name: 'customers' })
export class Customer {
  @PrimaryGeneratedColumn({ name: 'customer_id' })
  customerId: number;

  @Column({ name: 'customer_name' })
  customerName: string;

  @Column({ name: 'customer_address' })
  customerAddress: string;

  @Column({ name: 'customer_city' })
  customerCity: string;

  @Column({ name: 'customer_zipcode' })
  customerZipcode: string;

  @Column({ name: 'customer_state' })
  customerState: string;

  @Column({ name: 'customer_type' })
  customerType: string;

  @Column({ name: 'customer_tax_number' })
  customerTaxNumber: string;

  @Column({ name: 'customer_email' })
  customerEmail: string;

  @Column({ name: 'customer_bank_account' })
  customerBankAccount: string;

  @Column({ name: 'customer_telephone' })
  customerTelephone: string;

  @Column({ name: 'customer_language' })
  customerLanguage: string;

  @Column({ name: 'customer_currency' })
  customerCurrency: string;

  @Column({ name: 'customer_debit' })
  customerDebit: number;

  @Column({ name: 'customer_credit' })
  customerCredit: number;

  // O:M
  @OneToMany(
    type => SalesInvoice,
    saleinvoice => saleinvoice.customer,
  )
  saleinvoice: SalesInvoice[];

  // relation O:M with Transactions
  @OneToMany(
    type => Transactions,
    xsales => xsales.saleslines,
  )
  xsales: Transactions[];
}
