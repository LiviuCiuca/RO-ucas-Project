import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Student } from './Student';
import { Universities } from './Universities';

@Entity()
export class Enrollment {
   
    @PrimaryGeneratedColumn()
    id: number;
   
    @ManyToOne(type => Student, student => student.enrollments)
    student: Student;

    @ManyToOne(type => Universities, university => university.enrollments,{cascade: ["remove"]})
    university: Universities;
}
 //students cannot delete their enrollments, they apply and wait for the uni to accept or reject