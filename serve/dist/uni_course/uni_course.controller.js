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
exports.Uni_courseController = void 0;
const common_1 = require("@nestjs/common");
const uni_course_service_1 = require("./uni_course.service");
let Uni_courseController = class Uni_courseController {
    constructor(uni_co) {
        this.uni_co = uni_co;
    }
    addUni_Course(id, uni_course) {
        return this.uni_co.addUni_Course(id, uni_course);
    }
    getUni_Course() {
        return this.uni_co.getUni_Course();
    }
    getEnrollmentsByUniversityId(id) {
        return this.uni_co.getEnrollmentsByUniversityId(id);
    }
};
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], Uni_courseController.prototype, "addUni_Course", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Uni_courseController.prototype, "getUni_Course", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Uni_courseController.prototype, "getEnrollmentsByUniversityId", null);
Uni_courseController = __decorate([
    (0, common_1.Controller)('/university/course'),
    __metadata("design:paramtypes", [uni_course_service_1.Uni_courseService])
], Uni_courseController);
exports.Uni_courseController = Uni_courseController;
//# sourceMappingURL=uni_course.controller.js.map