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
exports.UniversityService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Universities_1 = require("../../entities/Universities");
const typeorm_2 = require("typeorm");
let UniversityService = class UniversityService {
    constructor(universityRepository) {
        this.universityRepository = universityRepository;
    }
    getUni() {
        return this.universityRepository.find();
    }
    async getUniById(id) {
        const uni = await this.universityRepository.findOne({ where: { id } });
        if (uni) {
            return uni;
        }
        throw new common_1.HttpException('University not found', common_1.HttpStatus.NOT_FOUND);
    }
    postUni(uniDetails) {
        const newUni = this.universityRepository.create(Object.assign({}, uniDetails));
        switch (true) {
            case (!uniDetails.name || !uniDetails.location || !uniDetails.email):
                throw new common_1.HttpException('Missing field(s) in request', common_1.HttpStatus.BAD_REQUEST);
            default:
                return this.universityRepository.save(newUni);
        }
    }
    async updateUniById(id, uniDetails) {
        await this.universityRepository.update({ id }, Object.assign({}, uniDetails));
        const university = await this.getUniById(id);
        return university;
    }
    async deleteUni(id) {
        try {
            const university = await this.getUniById(id);
            await this.universityRepository.delete({ id });
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.BadRequestException('Delete not successful');
        }
    }
};
UniversityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Universities_1.Universities)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UniversityService);
exports.UniversityService = UniversityService;
//# sourceMappingURL=university.service.js.map