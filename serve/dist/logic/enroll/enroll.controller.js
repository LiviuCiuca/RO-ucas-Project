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
const enroll_service_1 = require("./enroll.service");
let EnrollmentController = class EnrollmentController {
    constructor(enrollmentService) {
        this.enrollmentService = enrollmentService;
    }
    getEnrollments() {
        return this.enrollmentService.getAll();
    }
    getEnrollmentsByStudentId(id) {
        return this.enrollmentService.getEnrollmentsByStudentId(id);
    }
    getEnrollmentsByCourseId(courseId) {
        return this.enrollmentService.getEnrollmentsByCourseId(courseId);
    }
    apply(data) {
        const { student, course } = data;
        return this.enrollmentService.apply(student, course);
    }
    updateEnrollmentStatus(id, status) {
        return this.enrollmentService.updateEnrollmentStatus(id, status);
    }
};
__decorate([
    (0, decorators_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EnrollmentController.prototype, "getEnrollments", null);
__decorate([
    (0, decorators_1.Get)(':id'),
    __param(0, (0, decorators_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EnrollmentController.prototype, "getEnrollmentsByStudentId", null);
__decorate([
    (0, decorators_1.Get)('/course/:courseId'),
    __param(0, (0, decorators_1.Param)('courseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EnrollmentController.prototype, "getEnrollmentsByCourseId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EnrollmentController.prototype, "apply", null);
__decorate([
    (0, decorators_1.Put)(':id/status'),
    __param(0, (0, decorators_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], EnrollmentController.prototype, "updateEnrollmentStatus", null);
EnrollmentController = __decorate([
    (0, common_1.Controller)('/enrollment'),
    __metadata("design:paramtypes", [enroll_service_1.EnrollService])
], EnrollmentController);
exports.EnrollmentController = EnrollmentController;
//# sourceMappingURL=enroll.controller.js.map