import { Module } from '@nestjs/common';
import { TiketController } from './tiket.controller';

@Module({
  controllers: [TiketController]
})
export class TiketModule {}
