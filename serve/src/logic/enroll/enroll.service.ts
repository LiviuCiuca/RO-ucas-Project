import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Enrollment } from 'src/entities/Enrollments';
import { Repository } from 'typeorm';
import { createCoursesParams } from 'src/utils/coursesTypes';
import { createStudentParams } from 'src/utils/studentTypes';
import { CreateEnrollmentDto } from 'src/dtos/createEnrollmentDto';
import { Student } from 'src/entities/Student';
import { Courses } from 'src/entities/Courses';

@Injectable()
export class EnrollService {
    
    constructor(
        @InjectRepository(Enrollment)
        private readonly enrollmentRepository: Repository<Enrollment>,
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>,
        @InjectRepository(Courses)
        private readonly courseRepository: Repository<Courses>,
      ) {}


        getAll(): Promise<Enrollment[]> {
            //behind the scenes, typeorm will do a join query to get the student and course info
            return this.enrollmentRepository.find({relations: [ 'student','course']});
        }
        

        getEnrollmentsByStudentId(studentId: number): Promise<Enrollment[]> {
            
            return this.enrollmentRepository.find({ 
                where: { student: { id: studentId } },
                relations: [ 'student','course'] });
        }
       

        async create(createEnrollmentDto: CreateEnrollmentDto): Promise<Enrollment> {
            console.log('Creating enrollment:', createEnrollmentDto);
            const { student, course, status } = createEnrollmentDto;

            console.log(createEnrollmentDto)
            const foundStudent = await this.studentRepository.findOne({ where: { id: student } });
            const foundCourse = await this.courseRepository.findOne({ where: { id: course } });
        
            if (!foundStudent || !foundCourse) {
              // Handle error: either student or course not found
              throw new NotFoundException('Student or course not found');
            }
        
            const enrollment = new Enrollment();
            enrollment.student = foundStudent;
            enrollment.course = foundCourse;
            enrollment.status = status;
            const savedEnrollment = await this.enrollmentRepository.save(enrollment);

            console.log('Enrollment created:', savedEnrollment);
            return savedEnrollment;

          }
        


        
        //this not useful due to the cascade
        async deleteEnrollmentsByStudentId(studentId: number) {
            const id = studentId;
            const enrolledStudent = await this.enrollmentRepository.findOne({ where: { id: studentId } });

            if (!enrolledStudent) {
                throw new NotFoundException('Student not found');
            }
            this.enrollmentRepository.delete(id);
        }

        //this uni should do it
        updateStatus(id: number, status: string) {
            if(!id) {
                throw new NotFoundException('Enrollment not found');
            }
            this.enrollmentRepository.update(id, {status: status});
        }
}


// async apply(student: createStudentParams, course: createCoursesParams): Promise<Enrollment> {
          
        //     const enroll = this.enrollmentRepository.create({...student, ...course});
        //     enroll.studentId = student.id;
        //     enroll.status = 'Applied';
        //     switch (true) {
        //         case !student.id:
        //             throw new NotFoundException('Student does not exist');
        //         case !course.id:
        //             throw new NotFoundException('Course id: ' + course.id + ' does not exist');
        //         default:
        //             const savedEnrollment = await this.enrollmentRepository.save(enroll);
        //             return savedEnrollment;
                    
        //     }
        // }