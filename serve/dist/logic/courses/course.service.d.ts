import { Repository } from 'typeorm';
import { Courses } from 'src/entities/Courses';
import { createCoursesParams } from 'src/utils/coursesTypes';
import { Universities } from 'src/entities/Universities';
export declare class CourseService {
    private courseRepository;
    private uniRepository;
    constructor(courseRepository: Repository<Courses>, uniRepository: Repository<Universities>);
    findCourse(id: number): Promise<Courses>;
    getAllCourses(): Promise<Courses[]>;
    getCourseByUniId(id: number): Promise<Courses[]>;
    addCourse(id: number, courseDetails: createCoursesParams): Promise<Courses>;
    deleteCourse(id: number): Promise<{
        message: string;
        course: import("typeorm").DeleteResult;
    }>;
    updateCourseById(id: number, courseDetails: createCoursesParams): Promise<{
        message: string;
        course: Courses;
    }>;
}
