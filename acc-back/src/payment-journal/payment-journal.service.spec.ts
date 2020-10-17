import { Test, TestingModule } from '@nestjs/testing';
import { PaymentJournalService } from './payment-journal.service';

describe('PaymentJournalService', () => {
  let service: PaymentJournalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentJournalService],
    }).compile();

    service = module.get<PaymentJournalService>(PaymentJournalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
