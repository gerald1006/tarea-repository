import { IsString, IsNotEmpty, IsEnum } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { TipoTarea } from "../enum/tipo-tarea.enum";

export class CreateTareaDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty()
  @IsEnum(TipoTarea)
  @IsNotEmpty()
  tipo: TipoTarea;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  descripcion: string;
}