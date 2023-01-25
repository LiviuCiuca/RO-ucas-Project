/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Courses } from 'src/entities/Courses';

@Module({
    imports: [TypeOrmModule.forFeature([Courses])],
    controllers: [],
    providers: [],
})
export class CourseModule {}
