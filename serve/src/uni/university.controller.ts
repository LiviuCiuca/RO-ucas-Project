import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
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

    @Post()
    postUniversity(@Body() uniCreate: CreateUniDto) {

        return this.uniService.postUni(uniCreate);
    }

    @Put(":id")
    updateUniversityById(@Param('id', ParseIntPipe) id: number, @Body() uniUpdate: updateUniDto) {
       return this.uniService.updateUniById(id, uniUpdate);
    }
}


//Invoke-WebRequest -Method POST -Uri http://localhost:3000/university -Headers @{'Content-Type'='application/json'} -Body '{ "id": 1, "name": "John Doe", "email": "johndoe@example.com", "location": "New York", "rating": 5, "description": "A professional software developer", "image": "https://example.com/johndoe.jpg", "website": "https://johndoe.com" }'