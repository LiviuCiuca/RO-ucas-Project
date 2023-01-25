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
exports.Uni_Courses = void 0;
const typeorm_1 = require("typeorm");
const Universities_1 = require("./Universities");
const Courses_1 = require("./Courses");
let Uni_Courses = class Uni_Courses {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Uni_Courses.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Universities_1.Universities, university => university.uni_courses, { cascade: ["remove"] }),
    __metadata("design:type", Universities_1.Universities)
], Uni_Courses.prototype, "university", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Courses_1.Courses, course => course.uni_courses),
    __metadata("design:type", Courses_1.Courses)
], Uni_Courses.prototype, "course", void 0);
Uni_Courses = __decorate([
    (0, typeorm_1.Entity)()
], Uni_Courses);
exports.Uni_Courses = Uni_Courses;
//# sourceMappingURL=Uni_Course.js.map