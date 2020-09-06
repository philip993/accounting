import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ACCOUNTS_REPOSITORY } from '../constats/constats';
import { Accounts } from './accounts.entity';

@Injectable()
export class AccountsService {
  constructor(
    @Inject(ACCOUNTS_REPOSITORY)
    private accountsRepository: Repository<Accounts>,
  ) {}
  async findAll(): Promise<Accounts[]> {
    return await this.accountsRepository.find({ relations: ['transactions'] });
  }

  async findOne(id: number): Promise<Accounts> {
    return await this.accountsRepository.findOne(id);
  }

  async create(account: Accounts): Promise<Accounts> {
    const newAccount = this.accountsRepository.save(account);
    return await newAccount;
  }
}
