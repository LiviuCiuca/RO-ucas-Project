import { CreateCourseDto } from 'src/dtos/createCourseDto';
import { CourseService } from './course.service';
export declare class CourseController {
    private courseService;
    constructor(courseService: CourseService);
    addCourse(course: CreateCourseDto): Promise<import("../entities/Courses").Courses>;
}
