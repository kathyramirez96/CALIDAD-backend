import { BadRequestException, Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { crearDtoPublicaciones } from './dtos/create.dto';
import { PublicacionesService } from './publicaciones.service';

@Controller('publicaciones')
export class PublicacionesController {
    constructor(
        private readonly _publicacionesService: PublicacionesService,
    ){}


    /********************************
    **************GETS***************
    *********************************/
    @Get('obtener-publicaciones')
    async obtenerUsuarios() {
        try{            
            return await this._publicacionesService.buscarPublicaciones();
        }catch(error){
            return new BadRequestException('Error al obtener los Usuarios')
        }
    }



      /********************************
    *************POSTS***************
    *********************************/
    @Post('crear-publicaciones')
    async crearPaginas(
        @Body() data:{
            datosPublicacion:crearDtoPublicaciones
        }
    ) {
        try{
            return await this._publicacionesService.crearPublicaciones(JSON.parse(JSON.stringify(data)));
        }catch(error){
            return new BadRequestException('Error al crear Publicacion')
        }
    }

    /********************************
    *************Put***************
    *********************************/
    @Put('actualizar-publicaciones')
    async actualizarPublicacion(
        @Query() id:string,
        @Body() data:{
            datosPublicacion:crearDtoPublicaciones
        }
    ) {
        try{            
           return await this._publicacionesService.actrualizarPublicacion(JSON.parse(JSON.stringify(id)).id,JSON.parse(JSON.stringify(data)));
        }catch(error){
            return new BadRequestException('Error al actaulizar Publicacion')
        }
    }

    /********************************
    **************Delete***************
    *********************************/
    @Delete('eliminar-publicaciones')
    async borrarPublicacion(
        @Query() id:string,
    ) {
        try{                        
            return await this._publicacionesService.eleiminarPublicacion(id);
        }catch(error){
            return new BadRequestException('Error al eliminar la publicacion'+error)
        }
    }
}
