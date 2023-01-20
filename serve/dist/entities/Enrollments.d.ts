import { Student } from './Student';
import { Universities } from './Universities';
export declare class Enrollment {
    static studentId(studentId: any): void;
    id: number;
    student: Student;
    university: Universities;
}
