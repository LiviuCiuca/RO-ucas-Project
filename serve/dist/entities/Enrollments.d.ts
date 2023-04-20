import { Courses } from './Courses';
import { Student } from './Student';
export declare class Enrollment {
    id: number;
    student: Student;
    studentId: number;
    course: Courses;
    status: string;
}
