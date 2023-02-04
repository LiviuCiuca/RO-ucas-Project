import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { get } from 'http';
import { createUni_CoursesParams } from 'src/utils/uni_CoursesTypes';
import { Uni_courseService } from './uni_course.service';

@Controller('/university/course')
export class Uni_courseController {
    constructor(
        private uni_co: Uni_courseService
        ) {}
        
            @Post(':id')
            addUni_Course(@Param('id', ParseIntPipe) id: number, @Body() uni_course: createUni_CoursesParams) {
                return this.uni_co.addUni_Course(id, uni_course);
        }

        @Get()
        getUni_Course() {
            return this.uni_co.getUni_Course();
        }


        //Invoke-WebRequest -Method POST -Uri http://localhost:3000/university/course/1 -Headers @{'Content-Type'='application/json'} -Body '{ "university": "1", "course": "1" }'
      
    }
