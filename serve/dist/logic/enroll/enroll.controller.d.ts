import { CreateEnrollmentDto } from 'src/dtos/createEnrollmentDto';
import { EnrollService } from './enroll.service';
export declare class EnrollmentController {
    private enrollmentService;
    constructor(enrollmentService: EnrollService);
    getEnrollments(): Promise<import("../../entities/Enrollments").Enrollment[]>;
    getEnrollmentsByStudentId(id: number): Promise<import("../../entities/Enrollments").Enrollment[]>;
<<<<<<< HEAD
    create(createEnrollmentDto: CreateEnrollmentDto): Promise<import("../../entities/Enrollments").Enrollment>;
    updateEnrollment(id: number, status: string): void;
=======
    apply(data: {
        student: Student;
        course: Courses;
    }): Promise<import("../../entities/Enrollments").Enrollment>;
>>>>>>> main
}
