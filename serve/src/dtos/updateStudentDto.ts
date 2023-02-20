import { IsNotEmpty, IsNumber, IsString } from "class-validator/types/decorator/decorators";

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