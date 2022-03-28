import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PublicacionesController } from './publicaciones.controller';
import { Publicaciones, PublicacionesSchema } from './publicaciones.schema';
import { PublicacionesService } from './publicaciones.service';

@Module({
  imports:[
    MongooseModule.forFeature([{name:Publicaciones.name, schema: PublicacionesSchema }]),
  ],
  controllers: [PublicacionesController],
  providers: [PublicacionesService],
  exports: [PublicacionesService]
})
export class PublicacionesModule {}
