import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { SalesInvoiceService } from './sales-invoice.service';
import { SalesInvoice } from './sales-invoice.entity';
import { CreateSalesInvoiceDto } from './create-sales-invoice.dto';

@Controller('sales-invoice')
export class SalesInvoiceController {
  constructor(private readonly salesInvoiceService: SalesInvoiceService) {}

  @Get()
  async findAll(): Promise<SalesInvoice[]> {
    return this.salesInvoiceService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<SalesInvoice> {
    return this.salesInvoiceService.findOne(id);
  }

  @Post()
  async create(
    @Body() createSalesInvoiceDto: CreateSalesInvoiceDto,
  ): Promise<SalesInvoice> {
    return this.salesInvoiceService.create(createSalesInvoiceDto);
  }
}
