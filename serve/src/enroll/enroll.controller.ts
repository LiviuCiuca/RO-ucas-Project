import { Controller, Post, Body } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { Uni_Courses } from 'src/entities/Uni_Course';
import { EnrollService } from './enroll.service';

@Controller('enrollment')
export class EnrollmentController {

    constructor(
        private enrollmentService: EnrollService
        ) {}

    @Get()
    getEnrollmentsByUniId(@Body('universityId') universityId: number) {
        return this.enrollmentService.getEnrollmentsByUniversityId(universityId);
    }

    @Get()
    getEnrollmentsByStudentId(@Body('studentId') studentId: number) {
        return this.enrollmentService.getEnrollmentsByStudentId(studentId);
    }

    @Post()
    apply(@Body('uni_course') uni_course: Uni_Courses) {
        return this.enrollmentService.apply(uni_course);
    }

}
