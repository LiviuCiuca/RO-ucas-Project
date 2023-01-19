/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUniDto } from 'src/dtos/createUniDto';
import { updateUniDto } from 'src/dtos/updateUniDto';
import { UpdateDateColumn } from 'typeorm';
import { UniversityService } from './university.service';

@Controller('university')
export class UniversityController {
    constructor(private uniService: UniversityService) {}

    @Get()
    getUniversity() {
        return this.uniService.getUni();
    }

    @Post()
    postUniversity(@Body() uniCreate: CreateUniDto) {

        return this.uniService.postUni(uniCreate);
    }

    @Put(":id")
    updateUniversityById(@Param('id', ParseIntPipe) id: number, @Body() uniUpdate: updateUniDto) {
       return this.uniService.updateUniById(id, uniUpdate);
    }
}
