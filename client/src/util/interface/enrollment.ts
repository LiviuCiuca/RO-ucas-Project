import { Course } from "./course";
import { Student } from "./student";

export interface Enrollment {
    
    id: number,
    student: Student,
    course: Course,
    status: string,
    [x: string]: any;
}