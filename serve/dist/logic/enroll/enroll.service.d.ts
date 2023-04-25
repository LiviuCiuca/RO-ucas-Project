import { Enrollment } from 'src/entities/Enrollments';
import { Repository } from 'typeorm';
import { createCoursesParams } from 'src/utils/coursesTypes';
import { createStudentParams } from 'src/utils/studentTypes';
export declare class EnrollService {
    private enrollmentRepository;
    constructor(enrollmentRepository: Repository<Enrollment>);
    getAll(): Promise<Enrollment[]>;
    getEnrollmentsByStudentId(studentId: number): Promise<Enrollment[]>;
    getEnrollmentsByCourseId(courseId: number): Promise<Enrollment[]>;
    apply(student: createStudentParams, course: createCoursesParams): Promise<Enrollment>;
    deleteEnrollmentsByStudentId(studentId: number): Promise<void>;
    updateEnrollmentStatus(id: number, status: string): Promise<Enrollment>;
}
