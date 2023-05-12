import { Controller, Get, Post , Body, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
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

    /**
    * Get a student by ID
    * @param id: number - the ID of the student
    * @returns Promise<Student>
    */
    @Get(':id')
    getStudentById(@Param('id', ParseIntPipe) id: number) {
        return this.studentService.getStudentById(id);
    }

    /**
    * Create a new student
    * @param studentDto: CreateStudentDto - the student data to create
    * @returns Promise<Student>
    */
    @Post('')
    postStudent(@Body() studentDto: CreateStudentDto) {
        return this.studentService.postStudent(studentDto);
    }

    /**
    * Update a student by ID
    * @param id: number - the ID of the student to update
    * @param studentDto: updateStudentDto - the updated student data
    * @returns Promise<Student>
    */
    @Put(':id')
    updateStudentById(@Param('id', ParseIntPipe) id: number, @Body() studentDto: updateStudentDto) {
        return this.studentService.updateStudentById(id, studentDto);
    }

    /**
    * Delete a student by ID
    * @param id: number - the ID of the student to delete
    * @returns void
    */
    @Delete(':id')
    deleteStudentById(@Param('id', ParseIntPipe) id: number) {
        return this.studentService.deleteStudentById(id);
    }
}
