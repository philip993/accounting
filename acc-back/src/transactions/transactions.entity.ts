import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Accounts } from '../accounts/accounts.entity';

@Entity({ name: 'transactions' })
export class Transactions {
  @PrimaryGeneratedColumn({ name: 'transaction_id' })
  transactionId: number;

  @Column({ name: 'transaction_FK' })
  transactionFK: number;

  @Column({ name: 'transaction_description' })
  transactionDescription: string;

  @Column({ name: 'transaction_debit' })
  transactionDebit: number;

  @Column({ name: 'transaction_credit' })
  transactionCredit: number;

  @OneToMany(
    type => Accounts,
    accounts => accounts.transactions,
  )
  accounts: Accounts[];
}
