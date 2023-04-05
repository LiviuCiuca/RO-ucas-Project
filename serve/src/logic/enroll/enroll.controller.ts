import { Controller, Post, Body, ParseIntPipe } from '@nestjs/common';
import { Get, Param, Put } from '@nestjs/common/decorators';
import { CreateEnrollmentDto } from 'src/dtos/createEnrollmentDto';
import { EnrollService } from './enroll.service';

@Controller('/enrollment')
export class EnrollmentController {

    constructor(
        private enrollmentService: EnrollService
        ) {}

    @Get()
    getEnrollments() {
        return this.enrollmentService.getAll();
    }

    @Get(':id')
    getEnrollmentsByStudentId(@Param('id', ParseIntPipe) id: number) {
    return this.enrollmentService.getEnrollmentsByStudentId(id);
    }

    @Post()
    async create(@Body() createEnrollmentDto: CreateEnrollmentDto) {
        console.log('Creating enrollment:', createEnrollmentDto);
      return await this.enrollmentService.create(createEnrollmentDto);
    }

    @Put()
    updateEnrollment(@Param('id', ParseIntPipe) id: number, @Body('status') status: string) {
        return this.enrollmentService.updateStatus(id, status);
    }

}
