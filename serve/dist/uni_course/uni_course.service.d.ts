import { createUni_CoursesDto } from 'src/dtos/createUni_CoursesDto';
import { Courses } from 'src/entities/Courses';
import { Universities } from 'src/entities/Universities';
import { Uni_Courses } from 'src/entities/Uni_Course';
import { Repository } from 'typeorm';
export declare class Uni_courseService {
    private uni_courseRepository;
    private universityRepository;
    private courseRepository;
    constructor(uni_courseRepository: Repository<Uni_Courses>, universityRepository: Repository<Universities>, courseRepository: Repository<Courses>);
    getUni_Course(): Promise<Uni_Courses[]>;
    getUni_CoursesByUniId(uniId: number): Promise<Uni_Courses[]>;
    addUni_Course(id: number, uni_course: createUni_CoursesDto): Promise<Uni_Courses>;
    deleteUni_Course(id: number): void;
    selectedUni_Course(id: number): Promise<Uni_Courses>;
}
