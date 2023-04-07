
import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateProgramDto {
   @IsNotEmpty()
   @ApiProperty({ type: 'string', format: 'string', required: true })
   name: string;

   @ApiProperty({ type: 'string', format: 'string', required: true })
   @IsNotEmpty()
   description: string;

   @ApiProperty({ type: 'string', format: 'binary', required: true })
   @IsNotEmpty()
   image: string | Buffer;
}

