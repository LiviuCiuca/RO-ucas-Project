import { Student } from 'src/entities/Student';
import { createStudentParams, updateStudentParams } from 'src/utils/types';
import { Repository } from 'typeorm';
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: Repository<Student>);
    getAllStudents(): Promise<Student[]>;
    postStudent(studentDetails: createStudentParams): Promise<Student>;
    getStudentById(id: number): void;
    updateStudentById(id: number, studentDetails: updateStudentParams): void;
    deleteStudentById(id: number): void;
}
