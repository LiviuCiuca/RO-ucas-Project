import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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

    async getUniById(id: number): Promise<Universities> {
        const uni = await this.universityRepository.findOne({where: {id}});
        if(uni){
            return uni;
        }
        throw new HttpException('University not found', HttpStatus.NOT_FOUND);
    }

    //post a new university to mysql database if not return status code 404 
    postUni(uniDetails: createUniParams): Promise<Universities> {
        const newUni = this.universityRepository.create({...uniDetails});

        switch (true) {
            case ( !uniDetails.name || !uniDetails.location || !uniDetails.email):
            throw new HttpException('Missing field(s) in request', HttpStatus.BAD_REQUEST);
            // case (!newUni):
            // throw new NotFoundException('University not created');
            default:
            return this.universityRepository.save(newUni);
            }
    }
    
    // //get a university by course
   

   
    async updateUniById(id: number, uniDetails: createUniParams): Promise<Universities> {
        await this.universityRepository.update({ id }, {...uniDetails});
        const university = await this.getUniById(id);
        return university;
    }
    

   
    async deleteUni(id: number): Promise<void> {
        try {
            const university = await this.getUniById(id);
            await this.universityRepository.delete({ id });
        } catch (error) {
            if (error instanceof HttpException) {
            throw error;
        }
            throw new BadRequestException('Delete not successful');
        }
    }



}
