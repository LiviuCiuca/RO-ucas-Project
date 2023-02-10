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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Student_1 = require("../../entities/Student");
const typeorm_2 = require("typeorm");
let StudentService = class StudentService {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    getAllStudents() {
        return this.studentRepository.find();
    }
    async postStudent(studentDetails) {
        const newStudent = this.studentRepository.create(Object.assign({}, studentDetails));
        return this.studentRepository.save(newStudent);
    }
    async getStudentById(id) {
        const student = await this.studentRepository.findOne({ where: { id } });
        if (student) {
            return student;
        }
        throw new common_1.HttpException('Student not found', common_1.HttpStatus.NOT_FOUND);
    }
    async updateStudentById(id, studentDetails) {
        try {
            await this.getStudentById(id);
            return await this.studentRepository.update({ id }, Object.assign({}, studentDetails));
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException('Could not update student', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteStudentById(id) {
        try {
            const student = await this.getStudentById(id);
            await this.studentRepository.delete({ id });
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.BadRequestException('Delete not successful');
        }
    }
};
StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Student_1.Student)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map