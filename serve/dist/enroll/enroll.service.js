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
exports.EnrollService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Enrollments_1 = require("../entities/Enrollments");
const typeorm_2 = require("typeorm");
let EnrollService = class EnrollService {
    constructor(enrollmentRepository) {
        this.enrollmentRepository = enrollmentRepository;
    }
    getAll() {
        return this.enrollmentRepository.find({ relations: ['student', 'uni_course'] });
    }
    getEnrollmentsByStudentId(studentId) {
        const id = studentId;
        const allEnrollments = this.enrollmentRepository.find({ where: { id } });
        if (!allEnrollments) {
            throw new common_1.NotFoundException(`Student with ID "${studentId}" not found`);
        }
        return allEnrollments;
    }
    async apply(student, course) {
        const enrollment = new Enrollments_1.Enrollment();
        enrollment.course = course;
        enrollment.student = student;
        switch (true) {
            case !student:
                throw new common_1.NotFoundException('Student does not exist');
            case !course:
                throw new common_1.NotFoundException('Course does not exist');
            default:
                break;
        }
        const savedEnrollment = await this.enrollmentRepository.save(enrollment);
        return savedEnrollment;
    }
    deleteEnrollmentsByStudentId(studentId) {
        const id = studentId;
        const enroledStudent = this.enrollmentRepository.find({ where: { id } });
        if (!enroledStudent) {
            throw new common_1.NotFoundException('Student not found');
        }
        this.enrollmentRepository.delete(id);
    }
    updateStatus(studentId, status) {
        const id = studentId;
        const enroledStudent = this.enrollmentRepository.find({ where: { id } });
        if (!enroledStudent) {
            throw new common_1.NotFoundException('Student not found');
        }
        this.enrollmentRepository.update(id, { status: status });
    }
};
EnrollService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Enrollments_1.Enrollment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EnrollService);
exports.EnrollService = EnrollService;
//# sourceMappingURL=enroll.service.js.map