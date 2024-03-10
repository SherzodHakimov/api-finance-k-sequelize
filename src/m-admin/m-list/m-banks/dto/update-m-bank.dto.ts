import { PartialType } from '@nestjs/mapped-types';
import { CreateMBankDto } from './create-m-bank.dto';

export class UpdateMBankDto extends PartialType(CreateMBankDto) {}
