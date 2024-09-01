import { Module } from '@nestjs/common';
import { TareaService } from './tarea.service';
import { TareaController } from './tarea.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { tarea, TareaSchema } from './schema/tarea.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: tarea.name, schema: TareaSchema }])],
  providers: [TareaService],
  controllers: [TareaController]
})
export class TareaModule {}