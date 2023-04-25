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

    async findCourse(id: number): Promise<Courses> {
        const course = await this.courseRepository.findOne({where: {id}});

        if(!course){
            throw new NotFoundException('Course not found');
        }
        return course;
    }

    getAllCourses(): Promise<Courses[]>{
        return this.courseRepository.find({
            relations: ['university','enrollments']});
    }

    async getCourseByUniId(id: number): Promise<Courses[]>{
        const courses = await this.courseRepository.find({
          where: {university: {id}},
          relations: ['university','enrollments']});
        if(courses.length === 0){
          throw new NotFoundException('Course not found');
        }
        return courses;
      }

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
      

    async deleteCourse(id: number) {
        const course = await this.courseRepository.findOne({where: {id}});
       
        if(course){
            const deleted = await this.courseRepository.delete({ id });
            return {message: 'deleted succesfully', course: deleted};
        }
        else {
            throw new NotFoundException('Course not found');
        }  
    }

    async updateCourseById(id: number, courseDetails: createCoursesParams){
      const { enrollments, ...updatedDetails } = courseDetails;
      await this.courseRepository.update({ id }, updatedDetails);
  
      const updatedCourse = await this.courseRepository.findOne({ where: { id } });
  
      if (!updatedCourse) {
          throw new NotFoundException('Course not found');
      }
  
      return { message: 'updated succesfully', course: updatedCourse };
  }
  

   


}

 //i need to work on this, the thought process is that the uni will add a course to the database, 
 //i`m logged in as a uni so i can add a course
 

 //