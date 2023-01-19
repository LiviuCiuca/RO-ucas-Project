import { Controller, Post, Body } from '@nestjs/common';
import { EnrollService } from './enroll.service';

@Controller('enrollment')
export class EnrollmentController {

    constructor(private enrollmentService: EnrollService) {}

    @Post()
    async apply(@Body('studentId') studentId: number, @Body('universityId') universityId: number) {
        return this.enrollmentService.apply(studentId, universityId);
    }



}
