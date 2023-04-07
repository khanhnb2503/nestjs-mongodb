import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Transform } from 'class-transformer';

export type ClientsDocument = Clients & Document;

@Schema()
export class Clients {
   @Transform(({ value }) => value.toString())
   _id: string;

   @Prop()
   name: string;

   @Prop()
   address: string;
}

export const ClientsSchema = SchemaFactory.createForClass(Clients);