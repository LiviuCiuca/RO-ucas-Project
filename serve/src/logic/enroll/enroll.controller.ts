import { Controller, Post, Body, ParseIntPipe } from '@nestjs/common';
import { Get, Param } from '@nestjs/common/decorators';
import { Courses } from 'src/entities/Courses';
import { Student } from 'src/entities/Student';
import { EnrollService } from './enroll.service';

@Controller('/enrollment')
export class EnrollmentController {

    constructor(
        private enrollmentService: EnrollService
    ) { }

    @Get()
    getEnrollments() {
        return this.enrollmentService.getAll();
    }

    @Get('/:id')
    getEnrollmentsByStudentId(@Body('id') id: number) {
        return this.enrollmentService.getEnrollmentsByStudentId(id);
    }

    @Get('/course/:courseId')
    getEnrollmentsByCourseId(@Body('courseId') courseId: number) {
        return this.enrollmentService.getEnrollmentsByCourseId(courseId);
    }

    @Post()
    apply(@Body() data: { student: Student; course: Courses }) {
        const { student, course } = data;
        return this.enrollmentService.apply(student, course);
    }

}
