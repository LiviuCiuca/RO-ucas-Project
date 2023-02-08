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
    getUniById(id) {
        const uni = this.universityRepository.findOne({ where: { id } });
        if (!uni)
            throw new Error('University not found');
        return uni;
    }
    postUni(uniDetails) {
        const newUni = this.universityRepository.create(Object.assign({}, uniDetails));
        if (!newUni) {
            throw new Error('University not created');
        }
        return this.universityRepository.save(newUni);
    }
    updateUniById(id, uniDetails) {
        this.getUniById(id);
        this.universityRepository.update({ id }, Object.assign({}, uniDetails));
    }
    deleteUni(id) {
        this.getUniById(id);
        this.universityRepository.delete(id);
    }
};
UniversityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Universities_1.Universities)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UniversityService);
exports.UniversityService = UniversityService;
//# sourceMappingURL=university.service.js.map