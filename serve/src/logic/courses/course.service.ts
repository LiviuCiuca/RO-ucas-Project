import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, Repository } from 'typeorm';
import { Courses } from 'src/entities/Courses';
import { createCoursesParams } from 'src/utils/coursesTypes';
import { Universities } from 'src/entities/Universities';

@Injectable()
export class CourseService {
    constructor(
        @InjectRepository(Courses)
        private courseRepository: Repository<Courses>,
        @InjectRepository(Universities)
        private uniRepository: Repository<Universities>
    ) {}

    /**
    * Find a course by its ID
    * @param id: number - the ID of the course to find
    * @returns Promise<Courses>
    * @throws NotFoundException if the course is not found
    */
    async findCourse(id: number): Promise<Courses> {
        const course = await this.courseRepository.findOne({where: {id}});

        if(!course){
            throw new NotFoundException('Course not found');
        }
        return course;
    }

    /**
    * Get all courses with their associated university and enrollments
    * @returns Promise<Courses[]>
    */
    getAllCourses(): Promise<Courses[]>{
        return this.courseRepository.find({
            relations: ['university','enrollments']
        });
    }

    /**
    * Get all courses associated with a specific university ID
    * @param id: number - the ID of the university
    * @returns Promise<Courses[]>
    * @throws NotFoundException if no courses are found for the given university ID
    */
    async getCourseByUniId(id: number): Promise<Courses[]>{
        const courses = await this.courseRepository.find({
            where: {university: {id}},
            relations: ['university','enrollments']
        });
        if(courses.length === 0){
            throw new NotFoundException('Course not found');
        }
        return courses;
    }

    /**
    * Add a new course associated with a specific university
    * @param id: number - the ID of the university
    * @param courseDetails: createCoursesParams - the details of the course to add
    * @returns Promise<Courses>
    * @throws HttpException with status BAD_REQUEST if required fields are missing or the university ID is not found
    */
    async addCourse(id: number, courseDetails: createCoursesParams): Promise<Courses> {
        const university = await this.uniRepository.findOneBy({id});

        const course = this.courseRepository.create({...courseDetails, university});

        switch (true) {
            case (!courseDetails.name || !courseDetails.description || !courseDetails.price || !courseDetails.duration):
                throw new HttpException('Cannot POST /course', HttpStatus.BAD_REQUEST);
            case (!university):
                throw new HttpException('University with the specified ID not found', HttpStatus.NOT_FOUND);
            default:
                const savedCourse = await this.courseRepository.save(course);
                return {...savedCourse, id: savedCourse.id};
        }
    }

    /**
    * Delete a course by its ID
    * @param id: number - the ID of the course to delete
    * @returns Promise<{message: string, course: any}>
    * @throws NotFoundException if the course is not found
    */
    async deleteCourse(id: number) {
        const course = await this.courseRepository.findOne({where: {id}});

        if(course){
            const deleted = await this.courseRepository.delete({ id });
            return {message: 'deleted successfully', course: deleted};
        }
        else {
            throw new NotFoundException('Course not found');
        }
    }
    /*
    * Update a course by its ID
    * @param id: number - the ID of the course to update
    * @param courseDetails: createCoursesParams - the new details of the course
    * @returns Promise<{message: string, course: Courses}>
    * @throws NotFoundException if the course is not found
    */
    async updateCourseById(id: number, courseDetails: createCoursesParams){
        const { enrollments, ...updatedDetails } = courseDetails;
        await this.courseRepository.update({ id }, updatedDetails);
    
        const updatedCourse = await this.courseRepository.findOne({ where: { id } });
    
        if (!updatedCourse) {
            throw new NotFoundException('Course not found');
        }
    
        return { message: 'updated successfully', course: updatedCourse };
    }
}

 //i need to work on this, the thought process is that the uni will add a course to the database, 
 //i`m logged in as a uni so i can add a course
 

 //