import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PublicacionesDocument = Publicaciones & Document;

@Schema()
export class Publicaciones{
    @Prop(String)
    autor: string

    @Prop(String)
    publicacion:string

    @Prop(String)
    responsable:string

    @Prop(String)
    fecharegistro:string

    @Prop(String)
    estado:string
}

export const PublicacionesSchema = SchemaFactory.createForClass(Publicaciones);