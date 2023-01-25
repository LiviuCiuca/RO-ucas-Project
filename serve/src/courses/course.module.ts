import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Courses } from 'src/entities/Courses';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';

@Module({
    imports: [TypeOrmModule.forFeature([Courses])],
    controllers: [CourseController],
    providers: [CourseService],
})
export class CourseModule {}
