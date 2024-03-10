import { Controller } from '@nestjs/common';
import { MAdminService } from './m-admin.service';

@Controller('m-admin')
export class MAdminController {
  constructor(private readonly mAdminService: MAdminService) {}
}
