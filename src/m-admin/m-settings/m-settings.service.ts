import { Injectable } from '@nestjs/common';
import { CreateMSettingDto } from './dto/create-m-setting.dto';
import { UpdateMSettingDto } from './dto/update-m-setting.dto';

@Injectable()
export class MSettingsService {
  create(createMSettingDto: CreateMSettingDto) {
    return 'This action adds a new mSetting';
  }

  findAll() {
    return `This action returns all mSettings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mSetting`;
  }

  update(id: number, updateMSettingDto: UpdateMSettingDto) {
    return `This action updates a #${id} mSetting`;
  }

  remove(id: number) {
    return `This action removes a #${id} mSetting`;
  }
}
