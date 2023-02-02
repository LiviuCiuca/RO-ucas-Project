import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Courses } from 'src/entities/Courses';
import { createCoursesParams } from 'src/utils/coursesTypes';

@Injectable()
export class CourseService {
    constructor(
        @InjectRepository(Courses)
        private courseRepository: Repository<Courses>
    ) {}

    getCoursesByUniId(uniId: number): Promise<Courses[]>{
        const id = uniId;
        const allCourses = this.courseRepository.find({where: {id}});
        if (!allCourses) {
            throw new NotFoundException('University not found');
        }
        return allCourses;
    }
    
    //do i need to check uni id here? i`m logged in as uni..
    addCourse(uniId: number, courseDetails: createCoursesParams): Promise<Courses>{
        const id = uniId;
        if(this.courseRepository.findOne({where: {id}})) {
            const course = this.courseRepository.create({...courseDetails});
            return this.courseRepository.save(course);
        }
        else {
            throw new NotFoundException('University not found');
        }
    }

    deleteCourse(id: number): void{
        if(!this.courseRepository.findOne({where: {id}})){
            throw new NotFoundException('Course not found');
        }
        this.courseRepository.delete(id);
    }

    updateCourseById(id: number, courseDetails: createCoursesParams): void{
        if(!this.courseRepository.findOne({where: {id}})){
            throw new NotFoundException('Course not found');
        }
        this.courseRepository.update({ id }, {...courseDetails});
    }


}

 //i need to work on this, the thought process is that the uni will add a course to the database, 
 //i`m logged in as a uni so i can add a course
 // i need a new table to store the uni id and the course id