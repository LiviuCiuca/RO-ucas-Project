import { StudentService } from './student.service';
import { StudentController } from './student.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/entities/Student';

@Module({
    imports: [TypeOrmModule.forFeature([Student])],
    controllers: [
        StudentController,],
    providers: [
        StudentService,],
})
export class StudentModule { }
