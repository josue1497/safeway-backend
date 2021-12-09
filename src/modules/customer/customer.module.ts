import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { CustomerRepository } from './customer.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerRepository])],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
