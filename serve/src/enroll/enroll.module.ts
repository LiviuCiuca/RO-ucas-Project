import { EnrollmentController } from './enroll.controller';
import { EnrollService } from './enroll.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enrollment } from 'src/entities/Enrollments';

@Module({
    imports: [TypeOrmModule.forFeature([Enrollment])],
    controllers: [
        EnrollmentController,],
    providers: [
        EnrollService,],
})
export class EnrollModule { }
