import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Universities } from 'src/entities/Universities';
import { createUniParams, updateUniParams } from 'src/utils/uniTypes';
import { Repository } from 'typeorm';

@Injectable()
export class UniversityService { 
    constructor ( 
        @InjectRepository(Universities)
        private universityRepository: Repository<Universities>
    ){}

    /**
    * Get all universities
    * @returns Promise<Universities[]>
    */
    getUni(): Promise<Universities[]> {
        return this.universityRepository.find();
    }

    /**
    * Get a university by id
    * @param id: number - the id of the university to retrieve
    * @returns Promise<Universities>
    * @throws HttpException with status NOT_FOUND if university is not found
    */
    async getUniById(id: number): Promise<Universities> {
        const uni = await this.universityRepository.findOne({where: {id}});
        if(uni){
            return uni;
        }
        throw new HttpException('University not found', HttpStatus.NOT_FOUND);
    }

    /**
    * Create a new university
    * @param uniDetails : createUniParams  - the university data to create
    * @returns Promise<Universities>
    * @throws HttpException with status BAD_REQUEST if required fields are missing in the request body
    */
    postUni(uniDetails: createUniParams): Promise<Universities> {
        const newUni = this.universityRepository.create({...uniDetails});

        switch (true) {
            case ( !uniDetails.name || !uniDetails.location || !uniDetails.email):
                throw new HttpException('Missing field(s) in request', HttpStatus.BAD_REQUEST);
            default:
                return this.universityRepository.save(newUni);
        }
    }

    /**
    * Update a university by id
    * @param id: number - the id of the university to update
    * @param uniDetails: updateUniParams - the new data for the university
    * @returns Promise<Universities>
    * @throws HttpException with status NOT_FOUND if university is not found
    */
    async updateUniById(id: number, uniDetails: updateUniParams): Promise<Universities> {
        await this.universityRepository.update({ id }, {...uniDetails});
        const university = await this.getUniById(id);
        return university;
    }

    /**
    * Delete a university by id
    * @param id: number - the university id to delete
    * @returns void
    * @throws HttpException with status BAD_REQUEST if the delete operation is not successful
    */
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
