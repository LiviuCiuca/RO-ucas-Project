import { Controller, Get, ParseIntPipe } from '@nestjs/common';
import { Body, Delete, Param, Post, Put } from '@nestjs/common/decorators';
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

    /**
    * Get all courses associated with a specific university ID
    * @param id: number - the ID of the university
    * @returns Promise<Courses[]>
    */
    @Get(":id")
    getCourseByUniId(@Param('id', ParseIntPipe) id: number) {
        return this.courseService.getCourseByUniId(id);
    }

    /**
    * Add a new course associated with a specific university
    * @param id: number - the ID of the university
    * @param course: CreateCourseDto - the course data to add
    * @returns Promise<Courses>
    */
    @Post(':id')
    addCourse(@Param('id', ParseIntPipe) id: number, @Body() course: CreateCourseDto) {
        const posted = this.courseService.addCourse(id, course);
        return posted;
    }

    /**
    * Update a course by its ID
    * @param id: number - the ID of the course to update
    * @param course: CreateCourseDto - the updated course data
    * @returns Promise<Courses>
    */
    @Put(":id")
    updateCourseById(@Param('id', ParseIntPipe) id: number, @Body() course: CreateCourseDto) {
        return this.courseService.updateCourseById(id, course);
    }

    /**
    * Delete a course by its ID
    * @param id: number - the ID of the course to delete
    * @returns void
    */
    @Delete(":id")
    deleteCourse(@Param('id', ParseIntPipe) id: number) {
        return this.courseService.deleteCourse(id);
    }
}
