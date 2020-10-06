import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Transactions } from 'src/transactions/transactions.entity';

@Entity({ name: 'accounts' })
export class Accounts {
  @PrimaryGeneratedColumn({ name: 'account_id' })
  accountId: number;

  @Column({ name: 'account_code' })
  accountCode: number;

  @Column({ name: 'account_name', length: 255 })
  accountName: string;

  @Column({ name: 'debit_balance' })
  debitBalance: number;

  @Column({ name: 'credit_balance' })
  creditBalance: number;

  @OneToMany(
    type => Transactions,
    transactions => transactions.accounts,
  )
  transactions: Array<Transactions[]>;
}
