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
exports.EnrollmentController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const Student_1 = require("../entities/Student");
const Uni_Course_1 = require("../entities/Uni_Course");
const enroll_service_1 = require("./enroll.service");
let EnrollmentController = class EnrollmentController {
    constructor(enrollmentService) {
        this.enrollmentService = enrollmentService;
    }
    getEnrollmentsByUniId() {
        return this.enrollmentService.getAll();
    }
    getEnrollmentsByStudentId(studentId) {
        return this.enrollmentService.getEnrollmentsByStudentId(studentId);
    }
    apply(id, Student, uni_course) {
        return this.enrollmentService.apply(id, Student, uni_course);
    }
};
__decorate([
    (0, decorators_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EnrollmentController.prototype, "getEnrollmentsByUniId", null);
__decorate([
    (0, decorators_1.Get)(),
    __param(0, (0, common_1.Body)('studentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EnrollmentController.prototype, "getEnrollmentsByStudentId", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, decorators_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('student')),
    __param(2, (0, common_1.Body)('uni_course')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Student_1.Student, Uni_Course_1.Uni_Courses]),
    __metadata("design:returntype", void 0)
], EnrollmentController.prototype, "apply", null);
EnrollmentController = __decorate([
    (0, common_1.Controller)('/enrollment'),
    __metadata("design:paramtypes", [enroll_service_1.EnrollService])
], EnrollmentController);
exports.EnrollmentController = EnrollmentController;
//# sourceMappingURL=enroll.controller.js.map