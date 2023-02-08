/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { get } from 'http';
import { Universities } from 'src/entities/Universities';
import { createUniParams } from 'src/utils/uniTypes';
import { Repository } from 'typeorm';

@Injectable()
export class UniversityService { 
    constructor ( 
        @InjectRepository(Universities)
        private universityRepository: Repository<Universities>
    ){}

    //get all universities
    getUni(): Promise<Universities[]> {
      return this.universityRepository.find();
    }

    getUniById(id: number): Promise<Universities> {
        const uni = this.universityRepository.findOne({where: {id}});
        if(!uni)
            throw new Error('University not found');
            
        return uni;
    }

    //post a new university to mysql database if not return status code 404 
    postUni(uniDetails: createUniParams): Promise<Universities> {
        const newUni = this.universityRepository.create({...uniDetails});
        if(!newUni){
            throw new Error('University not created');
        }

        return this.universityRepository.save(newUni);
    }
    
    // //get a university by course
   

   
    updateUniById(id: number, uniDetails: createUniParams) {
        this.getUniById(id);
        this.universityRepository.update({ id }, {...uniDetails});
    }

   
    deleteUni(id: number) {
        this.getUniById(id);
        this.universityRepository.delete(id);
    }



}
