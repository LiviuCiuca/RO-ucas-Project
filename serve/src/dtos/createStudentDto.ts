import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateStudentDto {

    
    id: number;

    @IsNotEmpty()
    @IsString()
    username: string;
    
    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsNumber()
    age: number;
    enrollments: any;

}
// we can use class validator to validate the data