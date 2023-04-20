import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Enrollment } from 'src/entities/Enrollments';
import { Repository } from 'typeorm';
import { createCoursesParams } from 'src/utils/coursesTypes';
import { createStudentParams } from 'src/utils/studentTypes';
import { ConflictException } from '@nestjs/common';

@Injectable()
export class EnrollService {

    constructor(
        @InjectRepository(Enrollment)
        private enrollmentRepository: Repository<Enrollment>,
    ) { }


    getAll(): Promise<Enrollment[]> {
        //behind the scenes, typeorm will do a join query to get the student and course info
        return this.enrollmentRepository.find({ relations: ['student', 'course'] });
    }


    getEnrollmentsByStudentId(studentId: number): Promise<Enrollment[]> {
        if (!studentId) {
            throw new NotFoundException('Student not found');
        }
        return this.enrollmentRepository.find({
            where: { student: { id: studentId } },
            relations: ['student', 'course']
        });
    }
    getEnrollmentsByCourseId(courseId: number): Promise<Enrollment[]> {
        if (!courseId) {
            throw new NotFoundException('Course not found');
        }
        return this.enrollmentRepository.find({
            where: { course: { id: courseId } },
            relations: ['student', 'course']
        });
    }

    async apply(student: createStudentParams, course: createCoursesParams): Promise<Enrollment> {
        const enroll = this.enrollmentRepository.create({ student, course });
        enroll.studentId = student.id;
        enroll.status = 'Applied';
        if (!student) {
            throw new NotFoundException('Student does not exist');
        }
        if (!course) {
            throw new NotFoundException('Course ' + course + ' does not exist');
        }
        const savedEnrollment = await this.enrollmentRepository.save(enroll);
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

    //this uni should do
    updateStatus(id: number, status: string) {
        if (!id) {
            throw new NotFoundException('Enrollment not found');
        }
        this.enrollmentRepository.update(id, { status: status });
    }
}