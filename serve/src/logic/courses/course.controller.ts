import { Controller, Get, ParseIntPipe } from '@nestjs/common';
import { Body, Param, Post, Put } from '@nestjs/common/decorators';
import { CreateCourseDto } from 'src/dtos/createCourseDto';
import { CourseService } from './course.service';

@Controller('/course')
export class CourseController { 

    constructor(
        private courseService: CourseService
        ) {}

        @Get()
        getAllCourses() {
            return this.courseService.getAllCourses();
        }

        @Get(":id")
        getCourseByUniId(@Param('id', ParseIntPipe) id: number) {
            return this.courseService.getCourseByUniId(id);
        }

        @Post(':id')
        addCourse(@Param('id', ParseIntPipe) id: number, @Body() course: CreateCourseDto) {
            return this.courseService.addCourse(id, course);
        }

        @Put(":id")
        updateCourseById(@Param('id', ParseIntPipe) id: number, @Body() course: CreateCourseDto) {
            return this.courseService.updateCourseById(id, course);
        }
        

      
}
