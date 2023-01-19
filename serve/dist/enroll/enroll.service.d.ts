import { Enrollment } from 'src/entities/Enrollments';
import { Repository } from 'typeorm';
export declare class EnrollService {
    private enrollmentRepository;
    constructor(enrollmentRepository: Repository<Enrollment>);
    apply(studentId: number, universityId: number): Promise<Enrollment>;
    getEnrollmentsByStudentId(studentId: number): Promise<Enrollment[]>;
}
