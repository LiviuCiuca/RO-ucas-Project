import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Enrollment } from 'src/entities/Enrollments';
import { Repository } from 'typeorm';

@Injectable()
export class EnrollService {
   
    constructor(
        @InjectRepository(Enrollment)
        private enrollmentRepository: Repository<Enrollment>,
    ) {}

        
        getEnrollmentsByUniversityId(universityId: number): Promise<Enrollment[]> {
        const id = universityId;
        const allEnrollments = this.enrollmentRepository.find({where: {id}});
        if (!allEnrollments) {
            throw new NotFoundException('University not found');
        }
        return allEnrollments;
        }
        

        getEnrollmentsByStudentId(studentId: number): Promise<Enrollment[]> {
        const id = studentId;
        const allEnrollments = this.enrollmentRepository.find({where: {id}});
        if (!allEnrollments) {
            throw new NotFoundException(`Student with ID "${studentId}" not found`);
        }
        return allEnrollments;
        }

        apply(studentId: number, universityId: number): Promise<Enrollment> {
        const enrollment = new Enrollment();
        enrollment.student.id = studentId;
        enrollment.university.id = universityId;

        return this.enrollmentRepository.save(enrollment);
        } 
   
      
        deleteEnrollmentsByStudentId(studentId: number) {
        const id = studentId;
        const enroledStudent = this.enrollmentRepository.find({where: {id}});
        if (!enroledStudent) {
            throw new NotFoundException('Student not found');
        }
        this.enrollmentRepository.delete(id);
        }

}

