import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Enrollment } from 'src/entities/Enrollments';
import { Uni_Courses } from 'src/entities/Uni_Course';
import { Repository } from 'typeorm';
import { Student } from 'src/entities/Student';

@Injectable()
export class EnrollService {
    
    constructor(
        @InjectRepository(Enrollment)
        private enrollmentRepository: Repository<Enrollment>,
    ) {}


        getAll(): Promise<Enrollment[]> {
            return this.enrollmentRepository.find({relations: [ 'student','uni_course']});
        }
        

        getEnrollmentsByStudentId(studentId: number): Promise<Enrollment[]> {
            const id = studentId;
            const allEnrollments = this.enrollmentRepository.find({where: {id}});
            if (!allEnrollments) {
            throw new NotFoundException(`Student with ID "${studentId}" not found`);
            }
            return allEnrollments;
        }

        apply(id:number ,student:Student, uni_course: Uni_Courses): Promise<Enrollment> {
            const enrollment = new Enrollment();
            enrollment.uni_course = uni_course;
            enrollment.student = student;

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

