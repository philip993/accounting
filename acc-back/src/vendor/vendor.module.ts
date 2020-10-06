import { Module } from '@nestjs/common';
// Database
import { DatabaseModule } from 'src/database/database.module';
// Vendor
import { VendorController } from './vendor.controller';
import { vendorProviders } from './vendor.providers';
import { VendorService } from './vendor.service';

@Module({
  imports: [DatabaseModule],
  controllers: [VendorController],
  providers: [...vendorProviders, VendorService],
})
export class VendorModule {}
