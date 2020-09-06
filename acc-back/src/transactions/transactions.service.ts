import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TRANSACTIONS_REPOSITORY } from '../constats/constats';
import { Transactions } from './transactions.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @Inject(TRANSACTIONS_REPOSITORY)
    private transactionsRepository: Repository<Transactions>,
  ) {}

  async findAll(): Promise<Transactions[]> {
    return await this.transactionsRepository.find();
  }

  async findOne(id: number): Promise<Transactions> {
    return await this.transactionsRepository.findOne(id);
  }

  async create(transaction: Transactions): Promise<Transactions> {
    const newTransaction = this.transactionsRepository.save(transaction);
    return await newTransaction;
  }
}
