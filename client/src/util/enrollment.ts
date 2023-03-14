import { Course } from "./course";
import { Student } from "./student";

export interface Enrollment {
    student: Student,
    course: Course,
    status: string,
}