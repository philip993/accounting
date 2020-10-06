import { Injectable, Inject } from '@nestjs/common';
import { SALES_INVOICE_REPOSITORY } from 'src/constats/constats';
import { SalesInvoice } from './sales-invoice.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SalesInvoiceService {
  constructor(
    @Inject(SALES_INVOICE_REPOSITORY)
    private salesInvoiceRepository: Repository<SalesInvoice>,
  ) {}

  async findAll(): Promise<SalesInvoice[]> {
    return this.salesInvoiceRepository.find({
      relations: ['customer', 'salesinvoice'],
    });
  }

  async findOne(id: number): Promise<SalesInvoice> {
    return this.salesInvoiceRepository.findOne(id);
  }

  async create(salesInvoice: SalesInvoice): Promise<SalesInvoice> {
    const newSalesInvoice = this.salesInvoiceRepository.save(salesInvoice);
    return await newSalesInvoice;
  }
}
