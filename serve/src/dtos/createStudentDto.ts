import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateStudentDto {
    id: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    age: number;
    enrollments: any;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    contactDetails: string;

    @IsNotEmpty()
    @IsString()
    personalStatement: string;

    @IsNotEmpty()
    @IsString()
    whyTheCourse: string;

    @IsNotEmpty()
    @IsString()
    education: string;

    @IsNotEmpty()
    @IsString()
    workExperience: string;

    @IsNotEmpty()
    @IsString()
    skills: string;

    @IsNotEmpty()
    @IsString()
    interests: string;

    @IsNotEmpty()
    @IsString()
    references: string;
}
// we can use class validator to validate the data