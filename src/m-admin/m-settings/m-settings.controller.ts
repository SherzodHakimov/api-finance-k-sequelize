import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MSettingsService } from './m-settings.service';
import { CreateMSettingDto } from './dto/create-m-setting.dto';
import { UpdateMSettingDto } from './dto/update-m-setting.dto';

@Controller('m-settings')
export class MSettingsController {
  constructor(private readonly mSettingsService: MSettingsService) {}

  @Post()
  create(@Body() createMSettingDto: CreateMSettingDto) {
    return this.mSettingsService.create(createMSettingDto);
  }

  @Get()
  findAll() {
    return this.mSettingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mSettingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMSettingDto: UpdateMSettingDto) {
    return this.mSettingsService.update(+id, updateMSettingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mSettingsService.remove(+id);
  }
}
