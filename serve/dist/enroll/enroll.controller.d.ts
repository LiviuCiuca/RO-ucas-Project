import { EnrollService } from './enroll.service';
export declare class EnrollmentController {
    private enrollmentService;
    constructor(enrollmentService: EnrollService);
    apply(studentId: number, universityId: number): Promise<import("../entities/Enrollments").Enrollment>;
}
