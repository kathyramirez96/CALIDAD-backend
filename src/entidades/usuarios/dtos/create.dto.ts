import { IsInt, IsOptional, IsString, Length } from "class-validator";

export class crearDtoUsuarios {
 
    @IsOptional()
    @IsString()
    @Length(3,200)
    nombre:string;

    @IsOptional()
    @IsString()
    @Length(3,1000)
    clave: string;

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