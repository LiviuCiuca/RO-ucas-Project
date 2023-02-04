import { Enrollment } from 'src/entities/Enrollments';
import { Uni_Courses } from 'src/entities/Uni_Course';
import { Repository } from 'typeorm';
import { Student } from 'src/entities/Student';
export declare class EnrollService {
    private enrollmentRepository;
    constructor(enrollmentRepository: Repository<Enrollment>);
    getAll(): Promise<Enrollment[]>;
    getEnrollmentsByStudentId(studentId: number): Promise<Enrollment[]>;
    apply(id: number, student: Student, uni_course: Uni_Courses): Promise<Enrollment>;
    deleteEnrollmentsByStudentId(studentId: number): void;
}
