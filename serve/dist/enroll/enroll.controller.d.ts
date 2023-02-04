import { Student } from 'src/entities/Student';
import { Uni_Courses } from 'src/entities/Uni_Course';
import { EnrollService } from './enroll.service';
export declare class EnrollmentController {
    private enrollmentService;
    constructor(enrollmentService: EnrollService);
    getEnrollmentsByUniId(): Promise<import("../entities/Enrollments").Enrollment[]>;
    getEnrollmentsByStudentId(studentId: number): Promise<import("../entities/Enrollments").Enrollment[]>;
    apply(id: number, Student: Student, uni_course: Uni_Courses): Promise<import("../entities/Enrollments").Enrollment>;
}
