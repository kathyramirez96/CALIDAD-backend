import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PUERTO } from './enviroment/enviroment.dev';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(PORT);
  Logger.verbose(`APLICACION ESCUCHANDO EL PUERTO ==> ${PUERTO}`);
}
bootstrap();
