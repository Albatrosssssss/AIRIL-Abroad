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
exports.consultantcontroller = void 0;
const common_1 = require("@nestjs/common");
const consultant_service_1 = require("./consultant.service");
let consultantcontroller = class consultantcontroller {
    constructor(consultantService) {
        this.consultantService = consultantService;
    }
    getHello() {
        return this.consultantService.getHello();
    }
};
exports.consultantcontroller = consultantcontroller;
__decorate([
    (0, common_1.Get)('/hello'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], consultantcontroller.prototype, "getHello", null);
exports.consultantcontroller = consultantcontroller = __decorate([
    (0, common_1.Controller)('/consultant'),
    __metadata("design:paramtypes", [consultant_service_1.consultantService])
], consultantcontroller);
//# sourceMappingURL=consultant.controller.js.map