import { Transactions } from '../transactions/transactions.entity';

export class CreateAccountsDto {
  accountId: number;
  accountCode: number;
  accountName: string;
  debitBalance: number;
  creditBalance: number;
  transactions: Transactions;
}
