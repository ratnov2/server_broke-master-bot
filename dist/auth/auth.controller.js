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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const refreshToken_dto_1 = require("./dto/refreshToken.dto");
const auth_dto_1 = require("./dto/auth.dto");
const auth_service_1 = require("./auth.service");
const mail_service_1 = require("../mail/mail.service");
const forgotPassword_dto_1 = require("./dto/forgotPassword.dto");
const changePassword_dto_1 = require("./dto/changePassword.dto");
let AuthController = class AuthController {
    constructor(AuthService, mailService) {
        this.AuthService = AuthService;
        this.mailService = mailService;
    }
    async mail(data) {
        return this.mailService.send(data);
    }
    async login(data) {
        return this.AuthService.login(data);
    }
    async getNewTokens(data) {
        return this.AuthService.getNewTokens(data);
    }
    async forgotPassword(forgotPasswordDto) {
        return this.AuthService.forgotPassword(forgotPasswordDto);
    }
    async changePassword(token, changePasswordDto) {
        return this.AuthService.changePassword(token, changePasswordDto);
    }
    async register(dto) {
        console.log(dto);
        const oldUser = await this.AuthService.findByEmail(dto.email);
        if (oldUser)
            throw new common_1.BadRequestException("User with this email is already in the system");
        return this.AuthService.register(dto);
    }
};
__decorate([
    (0, common_1.Post)("mail"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [forgotPassword_dto_1.ForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "mail", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)("login"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)("login/access-token"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [refreshToken_dto_1.RefreshTokenDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getNewTokens", null);
__decorate([
    (0, common_1.Post)("forgotPassword"),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [forgotPassword_dto_1.ForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Patch)("changePassword"),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Promise, changePassword_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "changePassword", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Post)("register"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.AuthDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
AuthController = __decorate([
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        mail_service_1.MailService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map