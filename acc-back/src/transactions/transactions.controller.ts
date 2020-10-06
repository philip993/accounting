import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { Transactions } from './transactions.entity';
import { CreateTransactionsDto } from './create-transactions.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  async findAll(): Promise<Transactions[]> {
    return this.transactionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Transactions> {
    return this.transactionsService.findOne(id);
  }

  @Post()
  async create(
    @Body() createTransactionsDto: CreateTransactionsDto,
  ): Promise<Transactions> {
    return this.transactionsService.create(createTransactionsDto);
  }
}
