export class CreateStudentDto {

    id: number;
    username: string;
    password: string;
    age: number;
    enrollments: any;

}
// we can use class validator to validate the data