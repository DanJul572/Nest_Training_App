import { Injectable } from '@nestjs/common';
import { CreateProdutcDto } from './dto/create-produtc.dto';
import { UpdateProdutcDto } from './dto/update-produtc.dto';

@Injectable()
export class ProdutcsService {
    create(createProdutcDto: CreateProdutcDto) {
        return 'This action adds a new produtc';
    }

    findAll() {
        return `This action returns all produtcs`;
    }

    findOne(id: number) {
        return `This action returns a #${id} produtc`;
    }

    update(id: number, updateProdutcDto: UpdateProdutcDto) {
        return `This action updates a #${id} produtc`;
    }

    remove(id: number) {
        return `This action removes a #${id} produtc`;
    }
}
