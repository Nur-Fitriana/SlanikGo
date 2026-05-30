import { Module } from '@nestjs/common';
import { FasilitasController } from './fasilitas.controller';

@Module({
  controllers: [FasilitasController]
})
export class FasilitasModule {}
