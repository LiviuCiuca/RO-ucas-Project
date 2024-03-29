import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm"; 
import { Enrollment } from "./Enrollments";
import { Universities } from "./Universities";


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
    
    @OneToMany(type => Enrollment, enrollment => enrollment.course, { 
        cascade: true,
        onDelete: 'CASCADE',
      })
    enrollments: Enrollment[];

    @ManyToOne(type => Universities, university => university.courses,{ 
      cascade: true,
      onDelete: 'CASCADE',
    })
    university: Universities;
    

}