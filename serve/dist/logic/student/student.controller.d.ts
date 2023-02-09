import { CreateStudentDto } from 'src/dtos/createStudentDto';
import { updateStudentDto } from 'src/dtos/updateStudentDto';
import { StudentService } from './student.service';
export declare class StudentController {
    private studentService;
    constructor(studentService: StudentService);
    getStudents(): Promise<import("../../entities/Student").Student[]>;
    getStudentById(id: number): Promise<import("../../entities/Student").Student>;
    postStudent(studentDto: CreateStudentDto): Promise<import("../../entities/Student").Student>;
    updateStudentById(id: number, studentDto: updateStudentDto): Promise<import("typeorm").UpdateResult>;
    deleteStudentById(id: number): Promise<import("typeorm").DeleteResult>;
}
