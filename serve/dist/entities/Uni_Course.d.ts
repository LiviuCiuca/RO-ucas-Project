import { Universities } from './Universities';
import { Courses } from './Courses';
import { Enrollment } from './Enrollments';
export declare class Uni_Courses {
    id: number;
    university: Universities;
    course: Courses;
    enrollments: Enrollment[];
}
