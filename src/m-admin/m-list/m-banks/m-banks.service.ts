import { Injectable } from '@nestjs/common';
import { CreateMBankDto } from './dto/create-m-bank.dto';
import { UpdateMBankDto } from './dto/update-m-bank.dto';
import { InjectModel } from '@nestjs/sequelize';
import { MBanks } from './m-banks.model';

@Injectable()
export class MBanksService {

  constructor(@InjectModel(MBanks) private MBakRep: typeof MBanks ){}

  create(createMBankDto: CreateMBankDto) {
    this.MBakRep.create(createMBankDto);
    return 'This action adds a new mBank';
  }

  findAll() {
    return `This action returns all mBanks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mBank`;
  }

  update(id: number, updateMBankDto: UpdateMBankDto) {
    return `This action updates a #${id} mBank`;
  }

  remove(id: number) {
    return `This action removes a #${id} mBank`;
  }
}
