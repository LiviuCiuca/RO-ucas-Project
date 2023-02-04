"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uni_courseModule = void 0;
const uni_course_controller_1 = require("./uni_course.controller");
const uni_course_service_1 = require("./uni_course.service");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Uni_Course_1 = require("../entities/Uni_Course");
const Universities_1 = require("../entities/Universities");
const Courses_1 = require("../entities/Courses");
let Uni_courseModule = class Uni_courseModule {
};
Uni_courseModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Uni_Course_1.Uni_Courses, Universities_1.Universities, Courses_1.Courses])],
        controllers: [
            uni_course_controller_1.Uni_courseController,
        ],
        providers: [
            uni_course_service_1.Uni_courseService,
        ],
    })
], Uni_courseModule);
exports.Uni_courseModule = Uni_courseModule;
//# sourceMappingURL=uni_course.module.js.map