import { Courses } from 'src/entities/Courses';
import { Student } from 'src/entities/Student';
import { EnrollService } from './enroll.service';
export declare class EnrollmentController {
    private enrollmentService;
    constructor(enrollmentService: EnrollService);
    getEnrollments(): Promise<import("../../entities/Enrollments").Enrollment[]>;
    getEnrollmentsByStudentId(id: number): Promise<import("../../entities/Enrollments").Enrollment[]>;
    apply(student: Student, course: Courses): Promise<import("../../entities/Enrollments").Enrollment>;
    updateEnrollment(id: number, status: string): void;
}
