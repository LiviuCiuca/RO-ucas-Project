import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Enrollment } from 'src/entities/Enrollments';
import { Repository } from 'typeorm';
import { Student } from 'src/entities/Student';
import { Courses } from 'src/entities/Courses';

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

        async apply(student: Student, course: Courses): Promise<Enrollment> {
            const enrollment = new Enrollment();
            enrollment.course = course;
            enrollment.student = student;
        
            switch (true) {
                case !student:
                    throw new NotFoundException('Student does not exist');
                case !course:
                    throw new NotFoundException('Course does not exist');
                default:
                    break;
            }
        
            const savedEnrollment = await this.enrollmentRepository.save(enrollment);
            return savedEnrollment;
        }
        
   
      
        deleteEnrollmentsByStudentId(studentId: number) {
            const id = studentId;
            const enroledStudent = this.enrollmentRepository.find({where: {id}});
            if (!enroledStudent) {
                throw new NotFoundException('Student not found');
            }
            this.enrollmentRepository.delete(id);
        }

        updateStatus(studentId: number, status: string) {
            const id = studentId;
            const enroledStudent = this.enrollmentRepository.find({where: {id}});
            if (!enroledStudent) {
                throw new NotFoundException('Student not found');
            }
            this.enrollmentRepository.update(id, {status: status});
        }
}

