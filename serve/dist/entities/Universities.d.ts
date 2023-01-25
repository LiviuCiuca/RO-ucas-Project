import { Enrollment } from "./Enrollments";
import { Uni_Courses } from "./Uni_Course";
export declare class Universities {
    id: number;
    name: string;
    location: string;
    fees: number;
    enrollments: Enrollment[];
    uni_courses: Uni_Courses[];
}
