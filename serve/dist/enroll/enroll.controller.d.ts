import { Courses } from 'src/entities/Courses';
import { Student } from 'src/entities/Student';
import { EnrollService } from './enroll.service';
export declare class EnrollmentController {
    private enrollmentService;
    constructor(enrollmentService: EnrollService);
    getEnrollmentsByUniId(): Promise<import("../entities/Enrollments").Enrollment[]>;
    getEnrollmentsByStudentId(id: number): Promise<import("../entities/Enrollments").Enrollment[]>;
    apply(Student: Student, course: Courses): Promise<import("../entities/Enrollments").Enrollment>;
}
