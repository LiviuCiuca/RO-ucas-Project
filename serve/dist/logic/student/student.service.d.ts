import { Student } from 'src/entities/Student';
import { createStudentParams, updateStudentParams } from 'src/utils/studentTypes';
import { Repository } from 'typeorm';
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: Repository<Student>);
    getAllStudents(): Promise<Student[]>;
    postStudent(studentDetails: createStudentParams): Promise<Student>;
    getStudentById(id: number): Promise<Student>;
    updateStudentById(id: number, studentDetails: updateStudentParams): Promise<import("typeorm").UpdateResult>;
    deleteStudentById(id: number): Promise<void>;
}
