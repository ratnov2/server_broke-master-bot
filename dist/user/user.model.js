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
exports.UserModel = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const defaultClasses_1 = require("@typegoose/typegoose/lib/defaultClasses");
class UserModel extends defaultClasses_1.TimeStamps {
}
__decorate([
    (0, typegoose_1.prop)({ unique: true }),
    __metadata("design:type", String)
], UserModel.prototype, "email", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], UserModel.prototype, "password", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: false }),
    __metadata("design:type", Boolean)
], UserModel.prototype, "isAdmin", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], UserModel.prototype, "firstName", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: '' }),
    __metadata("design:type", String)
], UserModel.prototype, "lastName", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: '' }),
    __metadata("design:type", String)
], UserModel.prototype, "phone", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: false }),
    __metadata("design:type", Boolean)
], UserModel.prototype, "have_read", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: false }),
    __metadata("design:type", Boolean)
], UserModel.prototype, "isPayment", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: null }),
    __metadata("design:type", String)
], UserModel.prototype, "IdPayment", void 0);
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map