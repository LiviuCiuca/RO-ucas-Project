import { Enrollment } from "./Enrollments";
import { Universities } from "./Universities";
export declare class Courses {
    id: number;
    name: string;
    description: string;
    price: number;
    duration: number;
    enrollments: Enrollment[];
    university: Universities;
}
