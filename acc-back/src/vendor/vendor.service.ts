import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { VENDOR_REPOSITORY } from '../constats/constats';
import { Vendor } from './vendor.entity';

@Injectable()
export class VendorService {
  constructor(
    @Inject(VENDOR_REPOSITORY) private vendorRepository: Repository<Vendor>,
  ) {}

  async findAll(): Promise<Vendor[]> {
    return await this.vendorRepository.find({
      relations: ['vendorlines', 'invoice'],
    });
  }

  async findOne(id: number): Promise<Vendor> {
    return await this.vendorRepository.findOne(id, {
      relations: ['vendorlines', 'invoice'],
    });
  }

  async create(vendor: Vendor): Promise<Vendor> {
    const newVendor = this.vendorRepository.save(vendor);
    return await newVendor;
  }
}
