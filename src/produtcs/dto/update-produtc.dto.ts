import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutcDto } from './create-produtc.dto';

export class UpdateProdutcDto extends PartialType(CreateProdutcDto) {}
