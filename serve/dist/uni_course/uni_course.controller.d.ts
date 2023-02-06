import { createUni_CoursesParams } from 'src/utils/uni_CoursesTypes';
import { Uni_courseService } from './uni_course.service';
export declare class Uni_courseController {
    private uni_co;
    constructor(uni_co: Uni_courseService);
    addUni_Course(id: number, uni_course: createUni_CoursesParams): Promise<import("../entities/Uni_Course").Uni_Courses>;
    getUni_Course(): Promise<import("../entities/Uni_Course").Uni_Courses[]>;
    getEnrollmentsByUniversityId(id: number): Promise<import("../entities/Uni_Course").Uni_Courses[]>;
}
