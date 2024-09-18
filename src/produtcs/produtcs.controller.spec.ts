import { Test, TestingModule } from '@nestjs/testing';
import { ProdutcsController } from './produtcs.controller';
import { ProdutcsService } from './produtcs.service';

describe('ProdutcsController', () => {
    let controller: ProdutcsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ProdutcsController],
            providers: [ProdutcsService],
        }).compile();

        controller = module.get<ProdutcsController>(ProdutcsController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
