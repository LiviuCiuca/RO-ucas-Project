import { IsNotEmpty, IsString } from "class-validator";

export class updateUniDto{
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