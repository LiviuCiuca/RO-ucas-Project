import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class updateStudentDto {
    @IsNotEmpty()
    @IsString()
    username: string;
    @IsNotEmpty()
    @IsString()
    password: string;
    @IsNotEmpty()
    @IsNumber()
    age: number;
}