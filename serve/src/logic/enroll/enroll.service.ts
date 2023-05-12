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


    /*
    * Get all enrollments with their associated student and course information
    * @returns Promise<Enrollment[]>
    */
    getAll(): Promise<Enrollment[]> {
        // behind the scenes, TypeORM will do a join query to get the student and course info
        return this.enrollmentRepository.find({ relations: ['student', 'course'] });
    }


    /**
    * Get enrollments by student ID
    * @param studentId: number - the ID of the student
    * @returns Promise<Enrollment[]>
    * @throws NotFoundException if the student is not found
    */
    getEnrollmentsByStudentId(studentId: number): Promise<Enrollment[]> {
        if (!studentId) {
            throw new NotFoundException('Student not found');
        }
        return this.enrollmentRepository.find({
            where: { student: { id: studentId } },
            relations: ['student', 'course']
        });
    }

    /**
    * Get enrollments by course ID
    * @param courseId: number - the ID of the course
    * @returns Promise<Enrollment[]>
    * @throws NotFoundException if the course is not found
    */
    getEnrollmentsByCourseId(courseId: number): Promise<Enrollment[]> {
        if (!courseId) {
            throw new NotFoundException('Course not found');
        }
        return this.enrollmentRepository.find({
            where: { course: { id: courseId } },
            relations: ['student', 'course']
        });
    }

    /**
    * Apply for enrollment in a course
    * @param student: createStudentParams - the student details
    * @param course: createCoursesParams - the course details
    * @returns Promise<Enrollment>
    * @throws NotFoundException if the student or course is not found
    */
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

    /**
    * Delete enrollments by student ID
    * @param studentId: number - the ID of the student
    * @returns void
    * @throws NotFoundException if the student is not found
    */
    async deleteEnrollmentsByStudentId(studentId: number) {
        const id = studentId;
        const enrolledStudent = await this.enrollmentRepository.findOne({ where: { id: studentId } });

        if (!enrolledStudent) {
            throw new NotFoundException('Student not found');
        }
        this.enrollmentRepository.delete(id);
    }

    /**
    * Update the status of an enrollment
    * @param id: number - the ID of the enrollment
    * @param status: string - the new status value
    * @returns Promise<Enrollment>
    * @throws NotFoundException if the enrollment is not found
    */
    async updateEnrollmentStatus(id: number, status: string): Promise<Enrollment> {
        const enrollment = await this.enrollmentRepository.findOne({ where: { id } });
        if (!enrollment) {
            throw new NotFoundException('Enrollment not found');
        }
        enrollment.status = status;
        return this.enrollmentRepository.save(enrollment);
    }
}

