import { IsNotEmpty, IsNumber, IsString } from "class-validator";


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

    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsNotEmpty()
    @IsString()
    website: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    image: string;

    @IsNotEmpty()
    rating: number;
//for some reason @isNumber() gives 400 status code
}