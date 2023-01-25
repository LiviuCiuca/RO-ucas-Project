import { Uni_Courses } from 'src/entities/Uni_Course';
import { Repository } from 'typeorm';
export declare class Uni_courseService {
    private uni_courseRepository;
    constructor(uni_courseRepository: Repository<Uni_Courses>);
    getUni_CoursesByUniId(uniId: number): Promise<Uni_Courses[]>;
    deleteUni_Course(id: number): void;
}
