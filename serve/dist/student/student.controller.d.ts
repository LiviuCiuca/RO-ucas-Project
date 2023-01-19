import { CreateStudentDto } from 'src/dtos/createStudentDto';
import { updateStudentDto } from 'src/dtos/updateStudentDto';
import { StudentService } from './student.service';
export declare class StudentController {
    private studentService;
    constructor(studentService: StudentService);
    getStudents(): Promise<import("../entities/Student").Student[]>;
    getStudentById(id: number): void;
    postStudent(studentDto: CreateStudentDto): void;
    updateStudentById(id: number, studentDto: updateStudentDto): void;
    deleteStudentById(id: number): void;
}
