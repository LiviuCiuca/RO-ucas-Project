import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, Column } from 'typeorm';
import { Universities } from './Universities';
import { Courses } from './Courses';
import { Enrollment } from './Enrollments';


@Entity()
export class Uni_Courses{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Universities, university => university.uni_courses,{cascade: ["remove"]})
    university: Universities;

    @ManyToOne(type => Courses, course => course.uni_courses)
    course: Courses;
   
    @OneToMany(type => Enrollment, enrollment => enrollment.uni_course)
    enrollments: Enrollment[];
    

    
}