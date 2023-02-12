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
exports.CourseController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const createCourseDto_1 = require("../../dtos/createCourseDto");
const course_service_1 = require("./course.service");
let CourseController = class CourseController {
    constructor(courseService) {
        this.courseService = courseService;
    }
    getAllCourses() {
        return this.courseService.getAllCourses();
    }
    getCourseByUniId(id) {
        return this.courseService.getCourseByUniId(id);
    }
    addCourse(id, course) {
        const posted = this.courseService.addCourse(id, course);
        return posted;
    }
    updateCourseById(id, course) {
        return this.courseService.updateCourseById(id, course);
    }
    deleteCourse(id) {
        return this.courseService.deleteCourse(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "getAllCourses", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, decorators_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "getCourseByUniId", null);
__decorate([
    (0, decorators_1.Post)(':id'),
    __param(0, (0, decorators_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, createCourseDto_1.CreateCourseDto]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "addCourse", null);
__decorate([
    (0, decorators_1.Put)(":id"),
    __param(0, (0, decorators_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, createCourseDto_1.CreateCourseDto]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "updateCourseById", null);
__decorate([
    (0, decorators_1.Delete)(":id"),
    __param(0, (0, decorators_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "deleteCourse", null);
CourseController = __decorate([
    (0, common_1.Controller)('/course'),
    __metadata("design:paramtypes", [course_service_1.CourseService])
], CourseController);
exports.CourseController = CourseController;
//# sourceMappingURL=course.controller.js.map