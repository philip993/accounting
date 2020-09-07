import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
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

  @Column({ name: 'transaction_lines' })
  transactionLines: number;

  @ManyToOne(
    type => Accounts,
    accounts => accounts.transactions,
  )
  @JoinColumn({ name: 'transaction_FK' })
  accounts: Array<Accounts[]>;
}
