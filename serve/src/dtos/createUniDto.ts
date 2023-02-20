import { IsNotEmpty, IsString } from "class-validator/types/decorator/decorators";

export class CreateUniDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    location: string;

    @IsNotEmpty()
    @IsString()
    email: string;
   
}