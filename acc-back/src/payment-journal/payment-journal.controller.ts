import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { PaymentJournalService } from './payment-journal.service';
import { PaymentJournal } from './payment-journal.entity';
import { CreatePaymentJournalDto } from './create-payment-journal.dto';

@Controller('payment-journal')
export class PaymentJournalController {
  constructor(private readonly paymentJournalService: PaymentJournalService) {}

  @Get()
  async findAll(): Promise<PaymentJournal[]> {
    return this.paymentJournalService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<PaymentJournal> {
    return this.paymentJournalService.findOne(id);
  }

  @Post()
  async create(
    @Body() createPaymentJournalDto: CreatePaymentJournalDto,
  ): Promise<PaymentJournal> {
    return this.paymentJournalService.create(createPaymentJournalDto);
  }
}
