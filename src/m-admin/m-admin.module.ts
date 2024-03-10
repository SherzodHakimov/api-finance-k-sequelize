import { Module } from '@nestjs/common';
import { MAdminService } from './m-admin.service';
import { MAdminController } from './m-admin.controller';
import { MListModule } from './m-list/m-list.module';
import { MSettingsModule } from './m-settings/m-settings.module';

@Module({
  controllers: [MAdminController],
  providers: [MAdminService],
  imports: [MListModule, MSettingsModule],
})
export class MAdminModule {}
