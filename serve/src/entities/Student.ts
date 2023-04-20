import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { Enrollment } from "./Enrollments";

@Entity( {name: 'students'} )
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    address: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    contactDetails: string;

    @Column()
    personalStatement: string;

    @Column()
    whyTheCourse: string;

    @Column()
    education: string;

    @Column()
    workExperience: string;

    @Column()
    skills: string;

    @Column()
    interests: string;

    @Column()
    references: string;

    @OneToMany(type => Enrollment, enrollment => enrollment.student, {onDelete: 'CASCADE',})
    enrollments: Enrollment[];

  
}