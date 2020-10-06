import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateAccountsDto } from './create-accounts.dto';
import { AccountsService } from './accounts.service';
import { Accounts } from './accounts.entity';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}
  @Get()
  async findAll(): Promise<Accounts[]> {
    return this.accountsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Accounts> {
    return this.accountsService.findOne(id);
  }

  @Post()
  async create(
    @Body() createAccountsDto: CreateAccountsDto,
  ): Promise<Accounts> {
    return this.accountsService.create(createAccountsDto);
  }

  // @Request()
  // async name* (@Body() someNameDto: SomeNameDto) : Promise<Entity>{
  //  return this.nameOfService.nameOfMethod(someNameDto)
  // }

  // @Request()
  // async name* (@Param('id') id) : Promise<Entity>{
  //  return this.nameOfService.nameOfMethod(someNameDto)
  // }
}
