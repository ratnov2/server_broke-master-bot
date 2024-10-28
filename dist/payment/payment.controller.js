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
exports.PaymentController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const user_decorator_1 = require("../user/decorators/user.decorator");
const payment_info_dto_1 = require("./dto/payment-info.dto");
const payment_status_dto_1 = require("./dto/payment-status.dto");
const payment_dto_1 = require("./dto/payment.dto");
const payment_service_1 = require("./payment.service");
let PaymentController = class PaymentController {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    async createPayment(_id, dto) {
        return this.paymentService.payment(_id, dto);
    }
    async getPaymentStatus(dto) {
        return this.paymentService.paymentStatus(dto);
    }
    async getPaymentInfo(_id, dto) {
        return this.paymentService.paymentInfo(_id, dto);
    }
};
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)(),
    __param(0, (0, user_decorator_1.User)("_id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, payment_dto_1.PaymentDto]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "createPayment", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)("status"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_status_dto_1.PaymentStatusDto]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "getPaymentStatus", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)("info"),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, user_decorator_1.User)("_id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, payment_info_dto_1.PaymentInfoDto]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "getPaymentInfo", null);
PaymentController = __decorate([
    (0, common_1.Controller)("payment"),
    __metadata("design:paramtypes", [payment_service_1.PaymentService])
], PaymentController);
exports.PaymentController = PaymentController;
//# sourceMappingURL=payment.controller.js.map