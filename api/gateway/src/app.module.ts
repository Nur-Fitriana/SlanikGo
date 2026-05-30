import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { FasilitasModule } from './fasilitas/fasilitas.module';
import { GaleriModule } from './galeri/galeri.module';
import { InfoModule } from './info/info.module';
import { TiketModule } from './tiket/tiket.module';

@Module({
  imports: [AuthModule, FasilitasModule, GaleriModule, InfoModule, TiketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
