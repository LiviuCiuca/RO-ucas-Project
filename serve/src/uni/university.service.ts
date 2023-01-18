/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Universities } from 'src/entities/Universities';
import { createUniParams } from 'src/utils/uniTypes';
import { Repository } from 'typeorm';

@Injectable()
export class UniversityService { 
    constructor ( 
        @InjectRepository(Universities) private universityRepository: Repository<Universities>,
    ){}

    //get all universities
    getUni() {
      return this.universityRepository.find();
    }

    //post a new university to mysql database if not return status code 404 
    postUni(uniDetails: createUniParams) {
        const newUni = this.universityRepository.create({...uniDetails});

        return this.universityRepository.save(newUni);
    }
    
    //get a university by course
    getUniByCourse(courses: string) {
        const uni = this.universityRepository.findOne({where: {courses}});

        return uni;
    }

    //update a university by id 
    updateUniById(id: number, uniDetails: createUniParams) {
        this.universityRepository.update({ id }, {...uniDetails});
    }

}
