import { EnrollService } from './enroll.service';
import { Courses } from 'src/entities/Courses';
import { Student } from 'src/entities/Student';
export declare class EnrollmentController {
    private enrollmentService;
    constructor(enrollmentService: EnrollService);
    getEnrollments(): Promise<import("../../entities/Enrollments").Enrollment[]>;
    getEnrollmentsByStudentId(id: number): Promise<import("../../entities/Enrollments").Enrollment[]>;
    getEnrollmentsByCourseId(courseId: number): Promise<import("../../entities/Enrollments").Enrollment[]>;
    apply(data: {
        student: Student;
        course: Courses;
    }): Promise<import("../../entities/Enrollments").Enrollment>;
}
