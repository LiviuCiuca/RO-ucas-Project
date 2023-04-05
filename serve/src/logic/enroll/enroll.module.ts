import { EnrollmentController } from './enroll.controller';
import { EnrollService } from './enroll.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enrollment } from 'src/entities/Enrollments';
import { Student } from 'src/entities/Student';
import { Courses } from 'src/entities/Courses';

@Module({
    imports: [TypeOrmModule.forFeature([Enrollment, Student, Courses])],
    controllers: [EnrollmentController],
    providers: [EnrollService],
})
export class EnrollModule { }
