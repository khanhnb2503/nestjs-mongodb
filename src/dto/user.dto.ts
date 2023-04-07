import { IsNotEmpty, IsEmail } from "class-validator";

export class CreateUserDto {
   @IsNotEmpty()
   username: string;

   @IsNotEmpty()
   @IsEmail()
   email: string;

   @IsNotEmpty()
   password: string;
}