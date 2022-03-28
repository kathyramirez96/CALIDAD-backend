import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UsuariosDocument = Usuarios & Document;

@Schema()
export class Usuarios{
    @Prop(String)
    nombre: string

    @Prop(String)
    clave:string

    @Prop(String)
    responsable:string

    @Prop(String)
    fecharegistro:string

    @Prop(String)
    estado:string
}

export const UsuariosSchema = SchemaFactory.createForClass(Usuarios);