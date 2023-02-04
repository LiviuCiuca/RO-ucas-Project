import { Controller, Post, Body, ParseIntPipe } from '@nestjs/common';
import { Get, Param } from '@nestjs/common/decorators';
import { Student } from 'src/entities/Student';
import { Uni_Courses } from 'src/entities/Uni_Course';
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

    @Post(':id')
    apply(@Param('id', ParseIntPipe) id: number,@Body('student') Student: Student, @Body('uni_course') uni_course: Uni_Courses ) {
        return this.enrollmentService.apply(id ,Student, uni_course);
    }

}
