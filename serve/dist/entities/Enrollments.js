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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enrollment = void 0;
const typeorm_1 = require("typeorm");
const Student_1 = require("./Student");
const Uni_Course_1 = require("./Uni_Course");
let Enrollment = class Enrollment {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Enrollment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Student_1.Student, student => student.enrollments),
    __metadata("design:type", Student_1.Student)
], Enrollment.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Uni_Course_1.Uni_Courses, uni_course => uni_course.enrollments),
    __metadata("design:type", Uni_Course_1.Uni_Courses)
], Enrollment.prototype, "uni_course", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Enrollment.prototype, "status", void 0);
Enrollment = __decorate([
    (0, typeorm_1.Entity)()
], Enrollment);
exports.Enrollment = Enrollment;
//# sourceMappingURL=Enrollments.js.map