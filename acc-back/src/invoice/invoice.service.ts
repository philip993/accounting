import { Injectable, Inject } from '@nestjs/common';
import { Invoice } from './invoice.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InvoiceService {
  constructor(@Inject() private invoiceRepository: Repository<Invoice>) {}

  async findAll(): Promise<Invoice[]> {
    return await this.invoiceRepository.find();
  }

  async findOne(id: number): Promise<Invoice> {
    return await this.invoiceRepository.findOne(id);
  }

  async create(invoice: Invoice): Promise<Invoice> {
    return this.invoiceRepository.save(invoice);
  }
}
