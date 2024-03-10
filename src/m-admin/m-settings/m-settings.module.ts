import { Module } from '@nestjs/common';
import { MSettingsService } from './m-settings.service';
import { MSettingsController } from './m-settings.controller';

@Module({
  controllers: [MSettingsController],
  providers: [MSettingsService],
})
export class MSettingsModule {}
