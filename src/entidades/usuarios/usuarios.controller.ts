import { BadRequestException, Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { crearDtoUsuarios } from './dtos/create.dto';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
    constructor(
        private readonly _usuariosService: UsuariosService,
    ){}

    /********************************
    **************GETS***************
    *********************************/
    @Get('obtener-usuarios')
    async obtenerUsuarios() {
        try{            
            return await this._usuariosService.buscarUsuarios();
        }catch(error){
            return new BadRequestException('Error al obtener los Usuarios')
        }
    }


    @Get('ingreso-usuarios')
    async ingresarSistema(
        @Query() data:string
    ) {
        try{                          
            return await this._usuariosService.ingresoUsuarios(data["user"],data["clave"]);
        }catch(error){
            return new BadRequestException('Error al consultar Usuarios')
        }
    }
    
    /********************************
    *************POSTS***************
    *********************************/
    @Post('crear-usuarios')
    async crearPaginas(
        @Body() body
    ) {
        try{
            return await this._usuariosService.crearUsuarios(body);
        }catch(error){
            return new BadRequestException('Error al crear Usuarios')
        }
    }

}
