import { Transactions } from 'src/transactions/transactions.entity';

export class CreatePaymentJournalDto {
  paymentJournalId: number;
  paymentJournalDescription: string;
  paymentJournalDate: string;
  journals: Transactions[];
}
