import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform, Type } from 'class-transformer';
import { Categories } from './category.schema';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';


export type ProductDocument = Products & Document;

@Schema({
   timestamps: true,
})
export class Products {
   @Transform(({ value }) => value.toString())
   _id: string;

   @Prop()
   name: string;

   @Prop()
   price: number;

   @Prop()
   description: string;

   @Prop()
   image: string;

   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Categories.name })
   @Type(() => Categories)
   categoryId: Categories
}

export const ProductsSchema = SchemaFactory.createForClass(Products);
ProductsSchema.index({'$**': 'text'});