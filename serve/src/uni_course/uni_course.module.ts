import { Uni_courseController } from './uni_course.controller';
import { Uni_courseService } from './uni_course.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Uni_Courses } from 'src/entities/Uni_Course';


@Module({
    imports: [TypeOrmModule.forFeature([Uni_Courses])],
    controllers: [
        Uni_courseController,],
    providers: [
        Uni_courseService,],
})
export class Uni_courseModule { }
