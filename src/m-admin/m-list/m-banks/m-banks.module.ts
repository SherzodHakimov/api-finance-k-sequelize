import { Module } from '@nestjs/common';
import { MBanksService } from './m-banks.service';
import { MBanksController } from './m-banks.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { MBanks } from './m-banks.model';

@Module({
  controllers: [MBanksController],
  providers: [MBanksService],
  imports: [SequelizeModule.forFeature([MBanks])],

})

export class MBanksModule {}
