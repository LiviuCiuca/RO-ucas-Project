import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Enrollment } from 'src/entities/Enrollments';
import { Repository } from 'typeorm';

@Injectable()
export class EnrollService {
    studentService: any;
    constructor(
        @InjectRepository(Enrollment)
        private enrollmentRepository: Repository<Enrollment>,
    ) {}

    //adds new enrollment to mysql
    async apply(studentId: number, universityId: number): Promise<Enrollment> {
        const enrollment = new Enrollment();
        enrollment.student.id = studentId;
        enrollment.university.id = universityId;

        return this.enrollmentRepository.save(enrollment);
    }

    //get enrollments by student id
    async getEnrollmentsByStudentId(studentId: number): Promise<Enrollment[]> {
        const id = studentId;
        const allEnrollments = this.enrollmentRepository.find({where: {id}});
        return allEnrollments;
    }

    //delete enrollment 
    deleteEnrollment(id: number) {
        const student = this.studentService.findOne(Enrollment.studentId);
        if (!student) {
          throw new NotFoundException('Student not found');
        }
        this.enrollmentRepository.delete(id);
    
      }

}

