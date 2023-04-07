import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateClientDto {
   @ApiProperty({ 
      type: 'string', 
      format: 'string',
      description: 'The name of the Clients'
   })
   name: string;

   @ApiProperty({ 
      type: 'string', 
      format: 'string',
      description: 'The address of the Clients'
   })
   address: string;
}