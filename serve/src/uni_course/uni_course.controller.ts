import { Controller } from '@nestjs/common';
import { Uni_courseService } from './uni_course.service';

@Controller()
export class Uni_courseController {
    constructor(
        private uni_co: Uni_courseService
        ) {}

        
 }
