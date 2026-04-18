import { Module } from '@nestjs/common';
import { FasilitasService } from './fasilitas.service';
import { FasilitasController } from './fasilitas.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [FasilitasController],
  providers: [FasilitasService],
})
export class FasilitasModule {}
