import { Test, TestingModule } from '@nestjs/testing';
import { ProdutcsService } from './produtcs.service';

describe('ProdutcsService', () => {
    let service: ProdutcsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ProdutcsService],
        }).compile();

        service = module.get<ProdutcsService>(ProdutcsService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
