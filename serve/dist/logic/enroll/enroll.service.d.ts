import { Enrollment } from 'src/entities/Enrollments';
import { Repository } from 'typeorm';
import { CreateEnrollmentDto } from 'src/dtos/createEnrollmentDto';
import { Student } from 'src/entities/Student';
import { Courses } from 'src/entities/Courses';
export declare class EnrollService {
    private readonly enrollmentRepository;
    private readonly studentRepository;
    private readonly courseRepository;
    constructor(enrollmentRepository: Repository<Enrollment>, studentRepository: Repository<Student>, courseRepository: Repository<Courses>);
    getAll(): Promise<Enrollment[]>;
    getEnrollmentsByStudentId(studentId: number): Promise<Enrollment[]>;
    create(createEnrollmentDto: CreateEnrollmentDto): Promise<Enrollment>;
    deleteEnrollmentsByStudentId(studentId: number): Promise<void>;
    updateStatus(id: number, status: string): void;
}
