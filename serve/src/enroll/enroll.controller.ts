import { Controller, Post, Body, ParseIntPipe } from '@nestjs/common';
import { Get, Param } from '@nestjs/common/decorators';
import { Courses } from 'src/entities/Courses';
import { Student } from 'src/entities/Student';
import { EnrollService } from './enroll.service';

@Controller('/enrollment')
export class EnrollmentController {

    constructor(
        private enrollmentService: EnrollService
        ) {}

    @Get()
    getEnrollmentsByUniId() {
        return this.enrollmentService.getAll();
    }

    @Get()
    getEnrollmentsByStudentId(@Body('studentId') studentId: number) {
        return this.enrollmentService.getEnrollmentsByStudentId(studentId);
    }

    @Post('/post')
    apply(@Body('student') Student: Student, @Body('uni_course') course: Courses ) {
        return this.enrollmentService.apply(Student, course);
    }

}
