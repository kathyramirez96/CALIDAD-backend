import { IsInt, IsOptional, IsString, Length } from "class-validator";

export class crearDtoPublicaciones {
 
    @IsOptional()
    @IsString()
    @Length(3,200)
    autor:string;

    @IsOptional()
    @IsString()
    @Length(3,1000)
    publicacion: string;

    @IsOptional()
    @IsString()
    @Length(3, 50)
    responsable: string;
    
    @IsOptional()
    @IsString()
    fecharegistro: string;

    @IsOptional()
    @IsInt()
    estado: 0 | 1;
}