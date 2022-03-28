import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PUERTO } from './enviroment/enviroment.dev';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  Logger.verbose(`APLICACION ESCUCHANDO EL PUERTO ==> ${PUERTO}`);
}
bootstrap();
