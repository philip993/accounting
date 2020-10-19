import { Injectable, Inject } from '@nestjs/common';
import { PAYMENT_JOURNAL_REPOSITORY } from 'src/constats/constats';
import { Repository } from 'typeorm';
import { PaymentJournal } from './payment-journal.entity';

@Injectable()
export class PaymentJournalService {
  constructor(
    @Inject(PAYMENT_JOURNAL_REPOSITORY)
    private paymentJournalRepository: Repository<PaymentJournal>,
  ) {}

  async findAll(): Promise<PaymentJournal[]> {
    return await this.paymentJournalRepository.find({
      relations: ['journals'],
    });
  }

  async findOne(id: number): Promise<PaymentJournal> {
    return await this.paymentJournalRepository.findOne(id, {
      relations: ['journals'],
    });
  }

  async create(paymentJournal: PaymentJournal): Promise<PaymentJournal> {
    const newPaymentJournal = this.paymentJournalRepository.save(
      paymentJournal,
    );
    return await newPaymentJournal;
  }
}
