import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform, Type } from 'class-transformer';
import { Clients } from './client.schema';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type ProgramDocument = Programs & Document;

@Schema({
   timestamps: true,
})
export class Programs {
   @Transform(({ value }) => value.toString())
   _id: string;

   @Prop()
   name: string;

   @Prop()
   description: string;

   @Prop()
   image: string;

   @Prop({
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: Clients.name }],
   })
   
   @Type(() => Clients)
   clients: Clients
}

export const ProgramSchema = SchemaFactory.createForClass(Programs);