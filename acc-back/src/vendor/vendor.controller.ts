import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { Vendor } from './vendor.entity';
import { CreateVendorDto } from './create-vendor.dto';

@Controller('vendor')
export class VendorController {
  constructor(private readonly vendorService: VendorService) {}

  @Get()
  async findAll(): Promise<Vendor[]> {
    return this.vendorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Vendor> {
    return this.vendorService.findOne(id);
  }

  @Post()
  async create(@Body() createVendorDto: CreateVendorDto): Promise<Vendor> {
    return this.vendorService.create(createVendorDto);
  }
}
