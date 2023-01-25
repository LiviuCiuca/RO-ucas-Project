import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Universities } from './Universities';
import { Courses } from './Courses';


@Entity()
export class Uni_Courses{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Universities, university => university.uni_courses,{cascade: ["remove"]})
    university: Universities;

    @ManyToOne(type => Courses, course => course.uni_courses)
    course: Courses;
   
    
}