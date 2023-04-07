import { IsNotEmpty, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Clients } from "src/schema/client.schema";
import * as mongoose from 'mongoose';

export class CreateProgramDto {
   @ApiProperty({
      type: 'string',
      format: 'string',
      description: 'The name of the Programs'
   })
   name: string;

   @ApiProperty({
      type: 'string',
      format: 'string',
      description: 'The description of the Programs'
   })
   description: string;

   @ApiProperty({
      type: 'string',
      format: 'binary',
      description: 'The description of the Programs'
   })
   image: string;

   @ApiProperty({
      type: "array",
      items: {
         type: "string"
      },
   }) 
   clients: string[]
}
