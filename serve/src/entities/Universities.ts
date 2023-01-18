import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Enrollment } from "./Enrollments";

@Entity( {name: 'uni'} )
export class Universities {
    @PrimaryGeneratedColumn()
    id: number;

    @Column( )
    name: string;

    @Column()
    location: string;

    @Column()
    courses: string;

    @Column()
    fees: number;

    @OneToMany(type => Enrollment, enrollment => enrollment.university)
    enrollments: Enrollment[];


    // @Column()
    // rating: number;

    // @Column()
    // description: string;

    // @Column()
    // image: string;

    // @Column()
    // website: string;

    // @Column()
    // email: string;

    // @Column()
    // phone: string;

    // @Column()
    // address: string;

  
}