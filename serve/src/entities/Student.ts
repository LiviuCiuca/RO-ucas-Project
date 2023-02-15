import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { Enrollment } from "./Enrollments";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column( )
    username: string;

    @Column()
    password: string;

    @Column()
    age: number;

    @OneToMany(type => Enrollment, enrollment => enrollment.student, {onDelete: 'CASCADE',})
    enrollments: Enrollment[];

  
}