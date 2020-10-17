import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Transactions } from 'src/transactions/transactions.entity';

@Entity({ name: 'payment_journal' })
export class PaymentJournal {
  @PrimaryGeneratedColumn({ name: 'payment_journal_id' })
  paymentJournalId: number;

  @Column({ name: 'payment_journal_description' })
  paymentJournalDescription: string;

  @Column({ name: 'payment_journal_date' })
  paymentJournalDate: string;

  // O:M Transactions
  @OneToMany(
    type => Transactions,
    journals => journals.journalslines,
  )
  journals: Transactions[];
  // M:O Vendor

  // M:O Customer
}
