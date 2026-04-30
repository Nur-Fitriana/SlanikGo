import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FasilitasModule } from './fasilitas/fasilitas.module';
import { TiketModule } from './tiket/tiket.module';
import { InfoModule } from './info/info.module';
import { GaleriModule } from './galeri/galeri.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    FasilitasModule,
    TiketModule,
    InfoModule,
    GaleriModule,
    AuthModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
