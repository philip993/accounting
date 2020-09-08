import { Injectable, Inject } from '@nestjs/common';
import { Invoice } from './invoice.entity';
import { Repository } from 'typeorm';
import { INVOICE_REPOSITORY } from 'src/constats/constats';

@Injectable()
export class InvoiceService {
  constructor(
    @Inject(INVOICE_REPOSITORY) private invoiceRepository: Repository<Invoice>,
  ) {}

  async findAll(): Promise<Invoice[]> {
    return await this.invoiceRepository.find({
      relations: ['invoices', 'vendor'],
    });
  }

  async findOne(id: number): Promise<Invoice> {
    return await this.invoiceRepository.findOne(id);
  }

  async create(invoice: Invoice): Promise<Invoice> {
    return this.invoiceRepository.save(invoice);
  }
}
