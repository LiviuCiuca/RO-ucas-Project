import { Controller, Get, ParseIntPipe } from '@nestjs/common';
import { Body, Param, Post } from '@nestjs/common/decorators';
import { CreateCourseDto } from 'src/dtos/createCourseDto';
import { CourseService } from './course.service';

@Controller('/course')
export class CourseController { 

    constructor(
        private courseService: CourseService
        ) {}
        
        @Post()
        addCourse(@Body() course: CreateCourseDto) {
            return this.courseService.addCourse(course);
        }
      
}

//Invoke-WebRequest -Method POST -Uri http://localhost:3000/course -Headers @{'Content-Type'='application/json'} -Body '{ "name": "Product 1", "description": "A high-quality product", "price": 100, "duration": 30 }'