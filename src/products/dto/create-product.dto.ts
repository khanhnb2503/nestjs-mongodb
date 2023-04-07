import { IsNotEmpty } from "class-validator";
import { ApiProperty, } from "@nestjs/swagger";
import { Categories } from "src/schema/category.schema";
 
export class CreateProductDto {
   @IsNotEmpty()
   @ApiProperty({
      type: 'string',
      format: 'string',
      description: 'The name of the Products'
   })
   name: string;

   @IsNotEmpty()
   @ApiProperty({
      type: 'number',
      format: 'number',
      description: 'The price of the Products'
   })
   price: number;

   @ApiProperty({
      type: 'string',
      format: 'string',
      description: 'The description of the Products'
   })
   description: string;

   @ApiProperty({
      type: 'string',
      format: 'binary',
      description: 'The description of the Products'
   })
   image: string;

   @ApiProperty({
      type: 'string',
      format: 'string',
      enum: [
         '642d3263dc8b47e304af399a',
         '642d3277dc8b47e304af399c',
         '642d3293dc8b47e304af399e',
         '642d32aadc8b47e304af39a0'
      ],
      description: 'The categoryId of the Categories'
   })
   categoryId: Categories;
}
