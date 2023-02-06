import { Enrollment } from 'src/entities/Enrollments';
import { Repository } from 'typeorm';
import { Student } from 'src/entities/Student';
import { Courses } from 'src/entities/Courses';
export declare class EnrollService {
    private enrollmentRepository;
    constructor(enrollmentRepository: Repository<Enrollment>);
    getAll(): Promise<Enrollment[]>;
    getEnrollmentsByStudentId(studentId: number): Promise<Enrollment[]>;
    apply(student: Student, course: Courses): Promise<Enrollment>;
    deleteEnrollmentsByStudentId(studentId: number): void;
    updateStatus(studentId: number, status: string): void;
}
