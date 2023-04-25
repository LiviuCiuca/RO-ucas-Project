import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Courses } from './Courses';
import { Student } from './Student';


@Entity()
export class Enrollment {
   
    @PrimaryGeneratedColumn()
    id: number;
   
    @ManyToOne(type => Student, student => student.enrollments)
    @JoinColumn({ name: 'studentId' })
    student: Student;

    @Column()
    studentId: number;

    @ManyToOne(type => Courses, course => course.enrollments)
    @JoinColumn({ name: 'courseId' })
    course: Courses;
    
    @Column()
    courseId: number;

    @Column()
    status: string;
}
 //students cannot delete their enrollments, they apply and wait for the uni to accept or reject