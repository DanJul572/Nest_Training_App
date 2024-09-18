import { Module } from '@nestjs/common';
import { ProdutcsService } from './produtcs.service';
import { ProdutcsController } from './produtcs.controller';

@Module({
    controllers: [ProdutcsController],
    providers: [ProdutcsService],
})
export class ProdutcsModule {}
