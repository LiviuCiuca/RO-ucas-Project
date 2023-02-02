import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Student } from './Student';
import { Uni_Courses } from './Uni_Course';

@Entity()
export class Enrollment {
   
    @PrimaryGeneratedColumn()
    id: number;
   
    @ManyToOne(type => Student, student => student.enrollments)
    student: Student;

    @ManyToOne(type => Uni_Courses, uni_course => uni_course.enrollments)
    uni_course: Uni_Courses;
}
 //students cannot delete their enrollments, they apply and wait for the uni to accept or reject