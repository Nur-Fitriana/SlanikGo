import { Module } from '@nestjs/common';
import { GaleriController } from './galeri.controller';

@Module({
  controllers: [GaleriController]
})
export class GaleriModule {}
