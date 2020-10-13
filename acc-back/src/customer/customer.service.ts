import { Injectable, Inject } from '@nestjs/common';
import { CUSTOMER_REPOSITORY } from 'src/constats/constats';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @Inject(CUSTOMER_REPOSITORY)
    private customerRepository: Repository<Customer>,
  ) {}

  async findAll(): Promise<Customer[]> {
    return await this.customerRepository.find({
      relations: ['xsales', 'saleinvoice'],
    });
  }

  async findOne(id: number): Promise<Customer> {
    return await this.customerRepository.findOne(id, {
      relations: ['xsales', 'saleinvoice'],
    });
  }

  async create(customer: Customer): Promise<Customer> {
    const newCustomer = this.customerRepository.save(customer);
    return await newCustomer;
  }
}
