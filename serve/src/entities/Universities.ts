import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Enrollment } from "./Enrollments";
import { Uni_Courses } from "./Uni_Course";

@Entity( {name: 'uni'} )
export class Universities {

    @PrimaryGeneratedColumn()
    id: number;

    @Column( )
    name: string;

    @Column()
    email: string;

    @Column()
    location: string;

    @Column()
    rating: number;

    @Column()
    description: string;

    @Column()
    image: string;

    @Column()
    website: string;

    @OneToMany(type => Universities, Universities => Universities.uni_courses,{onDelete: "CASCADE"})
    uni_courses: Uni_Courses[];



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