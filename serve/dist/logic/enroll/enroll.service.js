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
const Enrollments_1 = require("../../entities/Enrollments");
const typeorm_2 = require("typeorm");
const Student_1 = require("../../entities/Student");
const Courses_1 = require("../../entities/Courses");
let EnrollService = class EnrollService {
    constructor(enrollmentRepository, studentRepository, courseRepository) {
        this.enrollmentRepository = enrollmentRepository;
        this.studentRepository = studentRepository;
        this.courseRepository = courseRepository;
    }
    getAll() {
        return this.enrollmentRepository.find({ relations: ['student', 'course'] });
    }
    getEnrollmentsByStudentId(studentId) {
        return this.enrollmentRepository.find({
            where: { student: { id: studentId } },
            relations: ['student', 'course']
        });
    }
<<<<<<< HEAD
    async create(createEnrollmentDto) {
        console.log('Creating enrollment:', createEnrollmentDto);
        const { student, course, status } = createEnrollmentDto;
        console.log(createEnrollmentDto);
        const foundStudent = await this.studentRepository.findOne({ where: { id: student } });
        const foundCourse = await this.courseRepository.findOne({ where: { id: course } });
        if (!foundStudent || !foundCourse) {
            throw new common_1.NotFoundException('Student or course not found');
        }
        const enrollment = new Enrollments_1.Enrollment();
        enrollment.student = foundStudent;
        enrollment.course = foundCourse;
        enrollment.status = status;
        const savedEnrollment = await this.enrollmentRepository.save(enrollment);
        console.log('Enrollment created:', savedEnrollment);
=======
    async apply(student, course) {
        const enroll = this.enrollmentRepository.create({ student, course });
        enroll.studentId = student.id;
        enroll.status = 'Applied';
        if (!student) {
            throw new common_1.NotFoundException('Student does not exist');
        }
        if (!course) {
            throw new common_1.NotFoundException('Course ' + course + ' does not exist');
        }
        const savedEnrollment = await this.enrollmentRepository.save(enroll);
>>>>>>> main
        return savedEnrollment;
    }
    async deleteEnrollmentsByStudentId(studentId) {
        const id = studentId;
        const enrolledStudent = await this.enrollmentRepository.findOne({ where: { id: studentId } });
        if (!enrolledStudent) {
            throw new common_1.NotFoundException('Student not found');
        }
        this.enrollmentRepository.delete(id);
    }
    updateStatus(id, status) {
        if (!id) {
            throw new common_1.NotFoundException('Enrollment not found');
        }
        this.enrollmentRepository.update(id, { status: status });
    }
};
EnrollService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Enrollments_1.Enrollment)),
    __param(1, (0, typeorm_1.InjectRepository)(Student_1.Student)),
    __param(2, (0, typeorm_1.InjectRepository)(Courses_1.Courses)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], EnrollService);
exports.EnrollService = EnrollService;
//# sourceMappingURL=enroll.service.js.map