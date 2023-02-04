import { Uni_courseController } from './uni_course.controller';
import { Uni_courseService } from './uni_course.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Uni_Courses } from 'src/entities/Uni_Course';
import { Universities } from 'src/entities/Universities';
import { Courses } from 'src/entities/Courses';


@Module({
    imports: [TypeOrmModule.forFeature([Uni_Courses, Universities, Courses])],
    controllers: [
        Uni_courseController,],
    providers: [
        Uni_courseService,],
})
export class Uni_courseModule { }
