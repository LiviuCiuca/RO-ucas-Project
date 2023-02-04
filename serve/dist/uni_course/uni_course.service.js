"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uni_courseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Courses_1 = require("../entities/Courses");
const Universities_1 = require("../entities/Universities");
const Uni_Course_1 = require("../entities/Uni_Course");
const typeorm_2 = require("typeorm");
let Uni_courseService = class Uni_courseService {
    constructor(uni_courseRepository, universityRepository, courseRepository) {
        this.uni_courseRepository = uni_courseRepository;
        this.universityRepository = universityRepository;
        this.courseRepository = courseRepository;
    }
    getUni_Course() {
        return this.uni_courseRepository.find({ relations: ["university", "course"] });
    }
    getUni_CoursesByUniId(uniId) {
        const id = uniId;
        const allUni_Courses = this.uni_courseRepository.find({ where: { id } });
        if (!allUni_Courses) {
            throw new common_1.NotFoundException('University not found');
        }
        return allUni_Courses;
    }
    async addUni_Course(id, uni_course) {
        const university = await this.universityRepository.findOneBy({ id });
        if (!university) {
            throw new common_1.NotFoundException('University not found');
        }
        const newUni_Course = this.uni_courseRepository.create(Object.assign(Object.assign({}, uni_course), { university }));
        return this.uni_courseRepository.save(newUni_Course);
        ;
    }
    deleteUni_Course(id) {
        this.uni_courseRepository.delete(id);
    }
    selectedUni_Course(id) {
        const uni_courseId = this.uni_courseRepository.findOneBy({ id });
        return uni_courseId;
    }
};
Uni_courseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Uni_Course_1.Uni_Courses)),
    __param(1, (0, typeorm_1.InjectRepository)(Universities_1.Universities)),
    __param(2, (0, typeorm_1.InjectRepository)(Courses_1.Courses)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], Uni_courseService);
exports.Uni_courseService = Uni_courseService;
//# sourceMappingURL=uni_course.service.js.map