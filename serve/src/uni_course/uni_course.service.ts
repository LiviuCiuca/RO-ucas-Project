import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Uni_Courses } from 'src/entities/Uni_Course';
import { Repository } from 'typeorm';

@Injectable()
export class Uni_courseService {
    constructor(
        @InjectRepository(Uni_Courses)
        private uni_courseRepository: Repository<Uni_Courses>
    ) {}

    getUni_CoursesByUniId(uniId: number): Promise<Uni_Courses[]>{
        const id = uniId;
        const allUni_Courses = this.uni_courseRepository.find({where: {id}});
        if (!allUni_Courses) {
            throw new NotFoundException('University not found');
        }
        return allUni_Courses;
    }

    //This gives me more control over the deletion process, on compared to the on delete cascade
    //not sure if ill use it yet
    deleteUni_Course(id: number) {
        this.uni_courseRepository.delete(id);
    }


 }
