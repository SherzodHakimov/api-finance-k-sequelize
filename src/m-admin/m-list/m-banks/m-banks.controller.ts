import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MBanksService } from './m-banks.service';
import { CreateMBankDto } from './dto/create-m-bank.dto';
import { UpdateMBankDto } from './dto/update-m-bank.dto';

@Controller('m-banks')
export class MBanksController {
  constructor(private readonly mBanksService: MBanksService) {}

  @Post()
  create(@Body() createMBankDto: CreateMBankDto) {
    return this.mBanksService.create(createMBankDto);
  }

  @Get()
  findAll() {
    return this.mBanksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mBanksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMBankDto: UpdateMBankDto) {
    return this.mBanksService.update(+id, updateMBankDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mBanksService.remove(+id);
  }
}
