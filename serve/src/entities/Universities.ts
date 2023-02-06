import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Courses } from "./Courses";

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

    @OneToMany(type => Universities, university => university.courses,{onDelete: "CASCADE"})
    courses: Courses[];


// @Column()
//     rating: number;

//     @Column()
//     description: string;

//     @Column()
//     image: string;

//     @Column()
//     website: string;
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