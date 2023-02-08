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
exports.UniversityController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const createUniDto_1 = require("../../dtos/createUniDto");
const updateUniDto_1 = require("../../dtos/updateUniDto");
const university_service_1 = require("./university.service");
let UniversityController = class UniversityController {
    constructor(uniService) {
        this.uniService = uniService;
    }
    getUniversity() {
        return this.uniService.getUni();
    }
    getUniversityById(id) {
        return this.uniService.getUniById(id);
    }
    postUniversity(uniCreate) {
        return this.uniService.postUni(uniCreate);
    }
    updateUniversity(id, uniUpdate) {
        return this.uniService.updateUniById(id, uniUpdate);
    }
    deleteUniversity(id) {
        return this.uniService.deleteUni(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UniversityController.prototype, "getUniversity", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UniversityController.prototype, "getUniversityById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUniDto_1.CreateUniDto]),
    __metadata("design:returntype", void 0)
], UniversityController.prototype, "postUniversity", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateUniDto_1.updateUniDto]),
    __metadata("design:returntype", void 0)
], UniversityController.prototype, "updateUniversity", null);
__decorate([
    (0, decorators_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UniversityController.prototype, "deleteUniversity", null);
UniversityController = __decorate([
    (0, common_1.Controller)('/university'),
    __metadata("design:paramtypes", [university_service_1.UniversityService])
], UniversityController);
exports.UniversityController = UniversityController;
//# sourceMappingURL=university.controller.js.map