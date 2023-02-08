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
exports.CourseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Courses_1 = require("../../entities/Courses");
const Universities_1 = require("../../entities/Universities");
let CourseService = class CourseService {
    constructor(courseRepository, uniRepository) {
        this.courseRepository = courseRepository;
        this.uniRepository = uniRepository;
    }
    findUniById(id) {
        const uni = this.uniRepository.findOne({ where: { id } });
        if (!uni) {
            throw new common_1.NotFoundException('Uni not found');
        }
        return uni;
    }
    getAllCourses() {
        return this.courseRepository.find({
            relations: ['university', 'enrollments']
        });
    }
    getCourseByUniId(id) {
        if (this.findUniById(id)) {
            return this.courseRepository.find({
                where: { university: { id } },
                relations: ['university', 'enrollments']
            });
        }
    }
    async addCourse(id, courseDetails) {
        const university = await this.findUniById(id);
        const course = this.courseRepository.create(Object.assign(Object.assign({}, courseDetails), { university }));
        const savedCourse = await this.courseRepository.save(course);
        return savedCourse;
    }
    deleteCourse(id) {
        if (!this.courseRepository.findOne({ where: { id } })) {
            throw new common_1.NotFoundException('Course not found');
        }
        this.courseRepository.delete(id);
    }
    updateCourseById(id, courseDetails) {
        if (!this.courseRepository.findOne({ where: { id } })) {
            throw new common_1.NotFoundException('Course not found');
        }
        this.courseRepository.update({ id }, Object.assign({}, courseDetails));
    }
};
CourseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Courses_1.Courses)),
    __param(1, (0, typeorm_1.InjectRepository)(Universities_1.Universities)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CourseService);
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map