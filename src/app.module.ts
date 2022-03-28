import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MODULOS } from './constantes/MODULOS';
import { MONGODB_CONEXION } from './enviroment/enviroment.dev';

@Module({
  imports: [
    MongooseModule.forRoot(MONGODB_CONEXION),
    ...MODULOS
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
