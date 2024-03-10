import { Module } from '@nestjs/common';
import { MListService } from './m-list.service';
import { MListController } from './m-list.controller';
import { MBanksModule } from './m-banks/m-banks.module';

@Module({
  controllers: [MListController],
  providers: [MListService],
  imports: [MBanksModule],
})
export class MListModule {}
