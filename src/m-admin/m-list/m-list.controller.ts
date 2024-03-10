import { Controller } from '@nestjs/common';
import { MListService } from './m-list.service';


@Controller('m-list')
export class MListController {
  constructor(private readonly mListService: MListService) {}
}
