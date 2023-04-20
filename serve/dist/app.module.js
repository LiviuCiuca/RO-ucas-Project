"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const course_module_1 = require("./logic/courses/course.module");
const enroll_module_1 = require("./logic/enroll/enroll.module");
const university_module_1 = require("./logic/uni/university.module");
const student_module_1 = require("./logic/student/student.module");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const Student_1 = require("./entities/Student");
const Universities_1 = require("./entities/Universities");
const Courses_1 = require("./entities/Courses");
const Enrollments_1 = require("./entities/Enrollments");
require("dotenv/config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            course_module_1.CourseModule,
            enroll_module_1.EnrollModule,
            university_module_1.UniversityModule,
            student_module_1.StudentModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                entities: [Student_1.Student, Universities_1.Universities, Enrollments_1.Enrollment, Courses_1.Courses],
                synchronize: true
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map