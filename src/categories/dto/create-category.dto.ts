import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
   @IsNotEmpty()
   @ApiProperty({
      type: 'string',
      format: 'string',
      description: 'The name of the Categorys'
   })
   name: string;
}
