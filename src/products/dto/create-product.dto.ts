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
         '643653fecb3f7429a67dc4e4',
         '6436541dcb3f7429a67dc4e6',
         '64365430cb3f7429a67dc4e8',
         '64365442cb3f7429a67dc4ea',
         '64365455cb3f7429a67dc4ec',
         '64365461cb3f7429a67dc4ee',
         '64365477cb3f7429a67dc4f0',
         '64365488cb3f7429a67dc4f2',
      ],
      description: 'The categoryId of the Categories'
   })
   categoryId: Categories;
}
