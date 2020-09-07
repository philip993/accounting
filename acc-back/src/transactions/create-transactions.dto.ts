import { Accounts } from 'src/accounts/accounts.entity';
import { Vendor } from 'src/vendor/vendor.entity';

export class CreateTransactionsDto {
  transactionId: number;
  transactionFK: number;
  transactionDescription: string;
  transactionDebit: number;
  transactionCredit: number;
  accounts: Array<Accounts[]>;
  // transactionLines: Array<Vendor[]>;
}
