import { CreateCourseDto } from 'src/dtos/createCourseDto';
import { CourseService } from './course.service';
export declare class CourseController {
    private courseService;
    constructor(courseService: CourseService);
    getAllCourses(): Promise<import("../../entities/Courses").Courses[]>;
    getCourseByUniId(id: number): Promise<import("../../entities/Courses").Courses[]>;
    addCourse(id: number, course: CreateCourseDto): Promise<import("../../entities/Courses").Courses>;
    updateCourseById(id: number, course: CreateCourseDto): Promise<{
        message: string;
        course: import("../../entities/Courses").Courses;
    }>;
    deleteCourse(id: number): Promise<{
        message: string;
        course: import("typeorm").DeleteResult;
    }>;
}
