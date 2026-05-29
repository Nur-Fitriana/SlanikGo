import { Test, TestingModule } from '@nestjs/testing';
import { FasilitasService } from './fasilitas.service';

describe('FasilitasService', () => {
  let service: FasilitasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FasilitasService],
    }).compile();

    service = module.get<FasilitasService>(FasilitasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
