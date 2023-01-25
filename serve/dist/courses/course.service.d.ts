import { Repository } from 'typeorm';
import { Courses } from 'src/entities/Courses';
import { createCoursesParams } from 'src/utils/coursesTypes';
export declare class CourseService {
    private courseRepository;
    constructor(courseRepository: Repository<Courses>);
    getCoursesByUniId(uniId: number): Promise<Courses[]>;
    addCourse(uniId: number, courseDetails: createCoursesParams): Promise<Courses>;
    deleteCourse(id: number): void;
    updateCourseById(id: number, courseDetails: createCoursesParams): void;
}
