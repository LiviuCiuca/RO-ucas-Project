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

    @Get(":id")
    getUniversityById(@Param('id', ParseIntPipe) id: number) {
        return this.uniService.getUniById(id);
    }

    @Post()
    postUniversity(@Body() uniCreate: CreateUniDto) {
        return this.uniService.postUni(uniCreate);
    }

    @Put(":id")
    updateUniversity(@Param('id', ParseIntPipe) id: number, @Body() uniUpdate: updateUniDto) {
       return this.uniService.updateUniById(id, uniUpdate);
    }
    
    @Delete(':id')
    deleteUniversity(@Param('id',ParseIntPipe) id: number){
        return this.uniService.deleteUni(id);
    }
    
}
