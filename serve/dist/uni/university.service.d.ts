import { Universities } from 'src/entities/Universities';
import { createUniParams } from 'src/utils/uniTypes';
import { Repository } from 'typeorm';
export declare class UniversityService {
    private universityRepository;
    constructor(universityRepository: Repository<Universities>);
    getUni(): Promise<Universities[]>;
    postUni(uniDetails: createUniParams): Promise<Universities>;
    getUniByCourse(courses: string): Promise<Universities>;
    updateUniById(id: number, uniDetails: createUniParams): void;
}
