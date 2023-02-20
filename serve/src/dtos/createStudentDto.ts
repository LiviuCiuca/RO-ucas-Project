import { IsNotEmpty, IsNumber, IsString } from "class-validator/types/decorator/decorators";

export class CreateStudentDto {

    @IsNotEmpty()
    @IsNumber()
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