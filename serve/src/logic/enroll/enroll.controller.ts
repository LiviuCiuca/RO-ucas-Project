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

    @Get(':id')
    getEnrollmentsByStudentId(@Param('id', ParseIntPipe) id: number) {
        return this.enrollmentService.getEnrollmentsByStudentId(id);
    }

    @Get('/course/:courseId')
    getEnrollmentsByCourseId(@Param('courseId') courseId: number) {
        return this.enrollmentService.getEnrollmentsByCourseId(courseId);
    }

    @Post()
    apply(@Body() data: { student: Student; course: Courses }) {
        const { student, course } = data;
        return this.enrollmentService.apply(student, course);
    }
    @Put(':id/status')
    updateEnrollmentStatus(@Param('id', ParseIntPipe) id: number,@Body('status') status: string) {
        return this.enrollmentService.updateEnrollmentStatus(id, status);
    }

}
