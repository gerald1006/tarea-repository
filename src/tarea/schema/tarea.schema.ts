import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { TipoTarea } from "../enum/tipo-tarea.enum";

@Schema({ collection:'tarea'})
export class tarea{
    @Prop()
    nombre: string
  
     @Prop({ enum: TipoTarea, default: TipoTarea.PENDIENTE })
    tipo: TipoTarea;
    @Prop()
    descripcion: string
}
export const TareaSchema = SchemaFactory.createForClass(tarea);
