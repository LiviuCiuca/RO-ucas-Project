import { Controller, Get, Post , Body, Put, Param, ParseIntPipe, Delete, HttpStatus } from '@nestjs/common';
import { CreateStudentDto } from 'src/dtos/createStudentDto';
import { updateStudentDto } from 'src/dtos/updateStudentDto';
import { StudentService } from './student.service';

@Controller('/student')
export class StudentController {

    constructor(
        private studentService: StudentService
        ) {}

    @Get('')
    getStudents() {
        return this.studentService.getAllStudents();
    }

    @Get(':id')
    getStudentById(@Param('id', ParseIntPipe) id: number) {
        return this.studentService.getStudentById(id);
    }

    @Post('')
    postStudent(@Body() studentDto: CreateStudentDto) {
       return this.studentService.postStudent(studentDto);
    }

    @Put(':id')
    updateStudentById(@Param('id', ParseIntPipe) id: number , @Body() studentDto: updateStudentDto) {
        return this.studentService.updateStudentById(id, studentDto);
    }

    @Delete(':id')
    deleteStudentById(@Param('id', ParseIntPipe) id: number) {
        HttpStatus.NO_CONTENT;
        return this.studentService.deleteStudentById(id);

    }
 }