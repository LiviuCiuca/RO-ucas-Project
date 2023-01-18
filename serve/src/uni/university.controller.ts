/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Post } from '@nestjs/common';

@Controller('university')
export class UniversityController {

    @Get()
    getUniversity() {

    }

    @Post()
    postUniversity() {

    }
}
