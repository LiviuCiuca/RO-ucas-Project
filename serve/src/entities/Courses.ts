import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Uni_Courses } from "./Uni_Course";



//only unis can add courses/ delete courses
@Entity()
export class Courses{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    duration: number;
    
    @OneToMany(type => Courses, Courses => Courses.uni_courses)
    uni_courses: Uni_Courses[];

}