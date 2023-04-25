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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
    async findCourse(id) {
        const course = await this.courseRepository.findOne({ where: { id } });
        if (!course) {
            throw new common_1.NotFoundException('Course not found');
        }
        return course;
    }
    getAllCourses() {
        return this.courseRepository.find({
            relations: ['university', 'enrollments']
        });
    }
    async getCourseByUniId(id) {
        const courses = await this.courseRepository.find({
            where: { university: { id } },
            relations: ['university', 'enrollments']
        });
        if (courses.length === 0) {
            throw new common_1.NotFoundException('Course not found');
        }
        return courses;
    }
    async addCourse(id, courseDetails) {
        const university = await this.uniRepository.findOneBy({ id });
        const course = this.courseRepository.create(Object.assign(Object.assign({}, courseDetails), { university }));
        switch (true) {
            case (!courseDetails.name || !courseDetails.description || !courseDetails.price || !courseDetails.duration):
                throw new common_1.HttpException('Cannot POST /course', common_1.HttpStatus.BAD_REQUEST);
            case (!university):
                throw new common_1.HttpException('University with the specified ID not found', common_1.HttpStatus.NOT_FOUND);
            default:
                const savedCourse = await this.courseRepository.save(course);
                return Object.assign(Object.assign({}, savedCourse), { id: savedCourse.id });
        }
    }
    async deleteCourse(id) {
        const course = await this.courseRepository.findOne({ where: { id } });
        if (course) {
            const deleted = await this.courseRepository.delete({ id });
            return { message: 'deleted succesfully', course: deleted };
        }
        else {
            throw new common_1.NotFoundException('Course not found');
        }
    }
    async updateCourseById(id, courseDetails) {
        const { enrollments } = courseDetails, updatedDetails = __rest(courseDetails, ["enrollments"]);
        await this.courseRepository.update({ id }, updatedDetails);
        const updatedCourse = await this.courseRepository.findOne({ where: { id } });
        if (!updatedCourse) {
            throw new common_1.NotFoundException('Course not found');
        }
        return { message: 'updated succesfully', course: updatedCourse };
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