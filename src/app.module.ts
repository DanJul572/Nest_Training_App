import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutcsModule } from './produtcs/produtcs.module';

@Module({
    imports: [ProdutcsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
