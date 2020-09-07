import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { Invoice } from './invoice.entity';
import { CreateInvoiceDto } from './create-invoice.dto';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get()
  async findAll(): Promise<Invoice[]> {
    return this.invoiceService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Invoice> {
    return this.invoiceService.findOne(id);
  }

  @Post()
  async save(@Body() createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
    return this.invoiceService.create(createInvoiceDto);
  }
}
