import { CreateUniDto } from 'src/dtos/createUniDto';
import { updateUniDto } from 'src/dtos/updateUniDto';
import { UniversityService } from './university.service';
export declare class UniversityController {
    private uniService;
    constructor(uniService: UniversityService);
    getUniversity(): Promise<import("../entities/Universities").Universities[]>;
    postUniversity(uniCreate: CreateUniDto): Promise<import("../entities/Universities").Universities>;
    updateUniversityById(id: number, uniUpdate: updateUniDto): void;
}
