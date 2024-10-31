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
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const user_model_1 = require("../user/user.model");
const YooKassa = require('yookassa');
const yooKassa = new YooKassa({
    shopId: "480065",
    secretKey: "test_ZNH3IOeg43MEKUMKpPk0cwUqod2UF51yIT_IwZTZOhk",
});
let PaymentService = class PaymentService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async payment(id, dto) {
        const user = { _id: 22 };
        const payment = await yooKassa.createPayment({
            amount: {
                value: dto.amount.toFixed(2),
                currency: "RUB",
            },
            confirmation: {
                type: "embedded",
            },
            description: "Заказ №72",
            capture: true,
        });
        if (payment) {
            console.log('wef!!!PAYm');
            return payment;
        }
    }
    async paymentStatus(dto) {
        if (dto.event !== "payment.waiting_for_capture")
            return;
    }
    async paymentInfo(_id, dto) {
        const user = await this.userModel.findById(_id).exec();
        if (!user.IdPayment)
            return;
        const payment = await yooKassa.getPayment(user.IdPayment);
        if (payment.status === "succeeded") {
            user.isPayment = true;
            await user.save();
            return {
                response: true,
            };
        }
        return {
            response: false,
        };
    }
};
PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(user_model_1.UserModel)),
    __metadata("design:paramtypes", [Object])
], PaymentService);
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map