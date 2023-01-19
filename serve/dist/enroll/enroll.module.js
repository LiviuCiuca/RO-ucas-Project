"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrollModule = void 0;
const enroll_controller_1 = require("./enroll.controller");
const enroll_service_1 = require("./enroll.service");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Enrollments_1 = require("../entities/Enrollments");
let EnrollModule = class EnrollModule {
};
EnrollModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Enrollments_1.Enrollment])],
        controllers: [
            enroll_controller_1.EnrollmentController,
        ],
        providers: [
            enroll_service_1.EnrollService,
        ],
    })
], EnrollModule);
exports.EnrollModule = EnrollModule;
//# sourceMappingURL=enroll.module.js.map