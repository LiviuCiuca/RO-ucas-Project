import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Student } from './Student';
import { Universities } from './Universities';

@Entity()
export class Enrollment {
    static studentId(studentId: any) {
        throw new Error('Method not implemented.');
    }
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Student, student => student.enrollments)
    student: Student;

    @ManyToOne(type => Universities, university => university.enrollments)
    university: Universities;
}
