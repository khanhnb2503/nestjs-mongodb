import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform, Type } from 'class-transformer';
import { Products } from './product.schema';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type CategoryDocument = Categories & Document;

@Schema({
   timestamps: true,
})
export class Categories {
   @Transform(({ value }) => value.toString())
   _id: string;

   @Prop()
   name: string;
   
   @Prop({
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Products' }],
   })
   @Type(() => Products)
   productId: Products
}

export const CategoriesSchema = SchemaFactory.createForClass(Categories);