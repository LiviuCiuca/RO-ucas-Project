import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

    findUniById(id: number): Promise<Universities> {
        const uni = this.uniRepository.findOne({where: {id}});
        if(!uni){
            throw new NotFoundException('Uni not found');
        }
        return uni;
    }

    getAllCourses(): Promise<Courses[]>{
        return this.courseRepository.find({
            relations: ['university','enrollments']});
    }

    getCourseByUniId(id: number): Promise<Courses[]>{
        if(this.findUniById(id)){
        return this.courseRepository.find({
            where: {university: {id}},
            relations: ['university','enrollments']});
        }
    }

    async addCourse( id: number, courseDetails: createCoursesParams): Promise<Courses>{
        const university = await this.findUniById(id);

        const course = this.courseRepository.create({...courseDetails, university});
        
        const savedCourse = await this.courseRepository.save(course);
       
        return savedCourse;
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
 

 //