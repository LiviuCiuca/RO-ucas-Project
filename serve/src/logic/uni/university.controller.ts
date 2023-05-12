import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Delete } from '@nestjs/common/decorators';
import { CreateUniDto } from 'src/dtos/createUniDto';
import { updateUniDto } from 'src/dtos/updateUniDto';
import { UniversityService } from './university.service';

@Controller('/university')
export class UniversityController {
    constructor(private uniService: UniversityService) {}

    @Get()
    getUniversity() {
        return this.uniService.getUni();
    }

    /**
    * Get a university by ID
    * @param id: number - the ID of the university
    * @returns Promise<Universities>
    */
    @Get(":id")
    getUniversityById(@Param('id', ParseIntPipe) id: number) {
        return this.uniService.getUniById(id);
    }

    /**
    * Create a new university
    * @param uniCreate: CreateUniDto - the university data to create
    * @returns Promise<Universities>
    */
    @Post()
    postUniversity(@Body() uniCreate: CreateUniDto) {
        return this.uniService.postUni(uniCreate);
    }

    /**
    * Update a university by ID
    * @param id: number - the ID of the university to update
    * @param uniUpdate: updateUniDto - the updated university data
    * @returns Promise<Universities>
    */
    @Put(":id")
    updateUniversity(@Param('id', ParseIntPipe) id: number, @Body() uniUpdate: updateUniDto) {
        return this.uniService.updateUniById(id, uniUpdate);
    }
    
    /**
    * Delete a university by ID
    * @param id: number - the ID of the university to delete
    * @returns void
    */
    @Delete(':id')
    deleteUniversity(@Param('id', ParseIntPipe) id: number){
        return this.uniService.deleteUni(id);
    }
}
