import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { ProdutcsService } from './produtcs.service';
import { CreateProdutcDto } from './dto/create-produtc.dto';
import { UpdateProdutcDto } from './dto/update-produtc.dto';

@Controller('produtcs')
export class ProdutcsController {
    constructor(private readonly produtcsService: ProdutcsService) {}

    @Post()
    create(@Body() createProdutcDto: CreateProdutcDto) {
        return this.produtcsService.create(createProdutcDto);
    }

    @Get()
    findAll() {
        return this.produtcsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.produtcsService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateProdutcDto: UpdateProdutcDto,
    ) {
        return this.produtcsService.update(+id, updateProdutcDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.produtcsService.remove(+id);
    }
}
