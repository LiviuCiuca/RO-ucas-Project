import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createUni_CoursesDto } from 'src/dtos/createUni_CoursesDto';
import { Courses } from 'src/entities/Courses';
import { Universities } from 'src/entities/Universities';
import { Uni_Courses } from 'src/entities/Uni_Course';
import { Repository } from 'typeorm';

@Injectable()
export class Uni_courseService {
    
    constructor(
        @InjectRepository(Uni_Courses)
        private uni_courseRepository: Repository<Uni_Courses>,
        @InjectRepository(Universities)
        private universityRepository: Repository<Universities>,
        @InjectRepository(Courses)
        private courseRepository: Repository<Courses>
    ) {}


    getUni_Course() {
        return this.uni_courseRepository.find({ relations: ["university", "course"]});
    }
    getUni_CoursesByUniId(uniId: number): Promise<Uni_Courses[]>{
        const id = uniId;
        const allUni_Courses = this.uni_courseRepository.find({where: {id}});
        if (!allUni_Courses) {
            throw new NotFoundException('University not found');
        }
        return allUni_Courses;
    }

    async addUni_Course(id:number, uni_course: createUni_CoursesDto): Promise<Uni_Courses> {
        const university = await this.universityRepository.findOneBy({id});
            
        if (!university) {
            throw new NotFoundException('University not found');
        }
        const newUni_Course = this.uni_courseRepository.create({...uni_course, university});
       
        return this.uni_courseRepository.save(newUni_Course);;
    }

    



    //This gives me more control over the deletion process, on compared to the on delete cascade
    //not sure if i`ll use it yet
    deleteUni_Course(id: number) {
        this.uni_courseRepository.delete(id);
    }

    selectedUni_Course(id: number): Promise<Uni_Courses>{
        
        const uni_courseId = this.uni_courseRepository.findOneBy({id});
        return uni_courseId;
    }

   

    //when i logg in as student i need to see the course i have applied 
 }
