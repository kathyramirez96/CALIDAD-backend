import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosController } from './usuarios.controller';
import { Usuarios, UsuariosSchema } from './usuarios.schema';
import { UsuariosService } from './usuarios.service';

@Module({
  imports:[
    MongooseModule.forFeature([{name:Usuarios.name, schema: UsuariosSchema }]),
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService]
})
export class UsuariosModule {}
