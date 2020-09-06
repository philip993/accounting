import { Accounts } from 'src/accounts/accounts.entity';

export class CreateTransactionsDto {
  transactionId: number;
  transactionFK: number;
  transactionDescription: string;
  transactionDebit: number;
  transactionCredit: number;
  accounts: Accounts[];
}
