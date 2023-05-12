import { Controller, Post, Body, ParseIntPipe } from '@nestjs/common';
import { Get, Param, Put } from '@nestjs/common/decorators';
import { EnrollService } from './enroll.service';
import { Courses } from 'src/entities/Courses';
import { Student } from 'src/entities/Student';

@Controller('/enrollment')
export class EnrollmentController {

    constructor(
        private enrollmentService: EnrollService
    ) { }

    @Get()
    getEnrollments() {
        return this.enrollmentService.getAll();
    }

    /**
    * Get enrollments by student ID
    * @param id: number - the ID of the student
    * @returns Promise<Enrollment[]>
    */
    @Get(':id')
    getEnrollmentsByStudentId(@Param('id', ParseIntPipe) id: number) {
        return this.enrollmentService.getEnrollmentsByStudentId(id);
    }

    /**
    * Get enrollments by course ID
    * @param courseId: number - the ID of the course
    * @returns Promise<Enrollment[]>
    */
    @Get('/course/:courseId')
    getEnrollmentsByCourseId(@Param('courseId') courseId: number) {
        return this.enrollmentService.getEnrollmentsByCourseId(courseId);
    }

    /**
    * Apply for enrollment in a course
    * @param data: { student: Student; course: Courses } - the student and course data
    * @returns Promise<Enrollment>
    */
    @Post()
    apply(@Body() data: { student: Student; course: Courses }) {
        const { student, course } = data;
        return this.enrollmentService.apply(student, course);
    }

    /**
    * Update the status of an enrollment
    * @param id: number - the ID of the enrollment
    * @param status: string - the new status value
    * @returns Promise<Enrollment>
    */
    @Put(':id/status')
    updateEnrollmentStatus(@Param('id', ParseIntPipe) id: number, @Body('status') status: string) {
        return this.enrollmentService.updateEnrollmentStatus(id, status);
    }

}
