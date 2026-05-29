import { Test, TestingModule } from '@nestjs/testing';
import { FasilitasController } from './fasilitas.controller';

describe('FasilitasController', () => {
  let controller: FasilitasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FasilitasController],
    }).compile();

    controller = module.get<FasilitasController>(FasilitasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
