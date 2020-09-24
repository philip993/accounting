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

  @Column({ name: 'vendor_name' })
  vendorName: string;

  @Column({ name: 'vendor_address' })
  vendorAddress: string;

  @Column({ name: 'vendor_tax_number' })
  vendorTaxNumber: string;

  @Column({ name: 'vendor_bank_number' })
  vendorBankAccount: string;

  @Column({ name: 'vendor_city' })
  vendorCity: string;

  @Column({ name: 'vendor_zipcode' })
  vendorZipCode: string;

  @Column({ name: 'vendor_telephone' })
  vendorTelephone: string;

  @Column({ name: 'vendor_email' })
  vendorEmail: string;

  @Column({ name: 'vendor_language' })
  vendorLanguage: string;

  @Column({ name: 'vendor_currency' })
  vendorCurrency: string;

  @Column({ name: 'vendor_debit' })
  vendorDebit: number;

  @Column({ name: 'vendor_credit' })
  vendorCredit: number;

  // relation O:O with Invoice
  // O:O with Vendor
  @OneToMany(
    type => Invoice,
    invoice => invoice.vendor,
  )
  invoice: Invoice[];
  // relation O:M with Transactions
  @OneToMany(
    type => Transactions,
    vendorlines => vendorlines.invoicelines,
  )
  vendorlines: Transactions[];
}
