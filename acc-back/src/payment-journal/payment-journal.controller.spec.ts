import { Test, TestingModule } from '@nestjs/testing';
import { PaymentJournalController } from './payment-journal.controller';

describe('PaymentJournalController', () => {
  let controller: PaymentJournalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentJournalController],
    }).compile();

    controller = module.get<PaymentJournalController>(PaymentJournalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
