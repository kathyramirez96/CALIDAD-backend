import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Publicaciones, PublicacionesDocument } from './publicaciones.schema';
import { Model } from "mongoose";
import { crearDtoPublicaciones } from './dtos/create.dto';
import { FECHA_ACTUAL } from 'src/funciones/gestion-fechas';

@Injectable()
export class PublicacionesService {
    constructor(
        @InjectModel(Publicaciones.name) private publicacionessModel: Model<PublicacionesDocument>
        ){}
        
 
        async crearPublicaciones(crearPublicacionDto: crearDtoPublicaciones): Promise<Publicaciones>{
        try{
                crearPublicacionDto.fecharegistro = FECHA_ACTUAL;
                crearPublicacionDto.responsable = "ADMIN";
                crearPublicacionDto.estado = 1;
                const crearUsuarios = new this.publicacionessModel(crearPublicacionDto);
                return await crearUsuarios.save();
            }catch(error){
                console.error("no se pudo publicar");
                
            }
            
        }

        async buscarPublicaciones():Promise<Publicaciones[]>{
            return this.publicacionessModel.find({estado:1}).exec();
        }

        async actrualizarPublicacion(id:string,crearPublicacionDto: crearDtoPublicaciones): Promise<Publicaciones>{
            return await this.publicacionessModel.findByIdAndUpdate(id,crearPublicacionDto);
        }

        async eleiminarPublicacion(id:string):Promise<Publicaciones>{
            const datos = JSON.parse(JSON.stringify(id));
            return await this.publicacionessModel.findByIdAndDelete(datos.id);
        }
    
}
