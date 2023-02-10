import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { FECHA_ACTUAL } from 'src/funciones/gestion-fechas';
import { crearDtoUsuarios } from './dtos/create.dto';
import { Usuarios, UsuariosDocument } from './usuarios.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectModel(Usuarios.name) private usuariosModel: Model<UsuariosDocument>
        ){}
    
 
        async crearUsuarios(body: any): Promise<Usuarios>{
        
            const existeUsuario = await this.buscarUsuarioxNombre(body.user);
             
            if(existeUsuario.length === 0 ){
                try{
                    let clave_hash = await bcrypt.hash(body.clave,10);
                    body.clave = clave_hash;
                    body.fecharegistro = FECHA_ACTUAL;
                    body.responsable = "ADMIN";
                    body.estado = 1;
                    const crearUsuarios = new this.usuariosModel(body);
                    return await crearUsuarios.save();
                }catch(error){
                    console.error("no se pudo enviar el correo");
                    
                }
            } 
        }
    

    async buscarUsuarios(): Promise<Usuarios[]>{
        return this.usuariosModel.find({estado:0}).exec();
    }


    async buscarUsuarioxNombre(user){
        return await this.usuariosModel.find({usuario:user}).exec();
    }
    async buscarUsuarioxCorreo(correo){
        return await this.usuariosModel.find({correo:correo}).exec();
    }

    async buscarUsuarioxNombrexID(user,id){
        return await this.usuariosModel.find({usuario:user , _id:{$ne:id}}).exec();
    }
    async buscarUsuarioxCorreoxID(correo,id){
        return await this.usuariosModel.find({correo:correo , _id:{$ne:id}}).exec();
    }


    async ingresoUsuarios(user,clave){
        const usuario = await this.usuariosModel.find({usuario:user}).exec();
        const comparar = await bcrypt.compare(clave, usuario[0].clave);
        usuario[0].clave = comparar;
        if(comparar){
            return usuario;
        }else{
            return null;
        }
        
   }

    // async actualizarEstado(id){
    //     const paginaRegistrada =  await this.UsuariosModel
    //     .find({_id:id})
    //     .exec();     
    //     const crearUsuarios = new this.UsuariosModel(paginaRegistrada[0]);
    //     await crearUsuarios.updateOne({estado:1});
    // }
}
