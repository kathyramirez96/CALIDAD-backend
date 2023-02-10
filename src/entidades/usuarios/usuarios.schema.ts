import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UsuariosDocument = Usuarios & Document;

@Schema()
export class Usuarios{

    @Prop(String)
    nombre: string

    @Prop(String)
    cedula: string

    @Prop(String)
    apellido: string
    
    @Prop(String)
    direccion:string

    @Prop(String)
    correo:string

    @Prop(String)
    provincia:string

    @Prop(String)
    pais:string

    @Prop(String)
    genero:string

    @Prop(String)
    telefono:string


    @Prop(String)
    celular:string
    

    @Prop(String)
    usuario:string

    @Prop(String)
    clave:string

    @Prop(String)
    sangre:string

    @Prop(String)
    altura:string

    @Prop(String)
    peso:string



    @Prop(String)
    ip:string

    @Prop(String)
    token:string

    @Prop(String)
    responsable:string

    @Prop(String)
    fecharegistro:string

    @Prop(String)
    estado:string
}

export const UsuariosSchema = SchemaFactory.createForClass(Usuarios);