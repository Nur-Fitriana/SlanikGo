import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Aktifkan validator global untuk DTO
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  // Jika aplikasi ini berjalan di balik gateway/routing tertentu, definisikan prefix di sini jika diperlukan
  // app.setGlobalPrefix('api');

  await app.listen(3000);
  console.log(`Application is running on: http://localhost:3000`);
}
bootstrap();
