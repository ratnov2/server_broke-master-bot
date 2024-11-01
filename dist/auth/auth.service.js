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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcryptjs_1 = require("bcryptjs");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const user_model_1 = require("../user/user.model");
const mail_service_1 = require("../mail/mail.service");
let AuthService = class AuthService {
    constructor(UserModel, jwtService, mailService) {
        this.UserModel = UserModel;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    async login({ email, password }) {
        const user = await this.validateUser(email, password);
        const tokens = await this.issueTokenPair(String(user._id));
        return Object.assign({ user: this.returnUserFields(user) }, tokens);
    }
    async register({ email, password, firstName, lastName, phone }) {
        const salt = await (0, bcryptjs_1.genSalt)(10);
        const newUser = new this.UserModel({
            email,
            password: await (0, bcryptjs_1.hash)(password, salt),
            firstName,
            lastName,
            phone,
        });
        const user = await newUser.save();
        const tokens = await this.issueTokenPair(String(user._id));
        return Object.assign({ user: this.returnUserFields(user) }, tokens);
    }
    async getNewTokens({ refreshToken }) {
        if (!refreshToken)
            throw new common_1.UnauthorizedException("Please sign in!");
        const result = await this.jwtService.verifyAsync(refreshToken);
        if (!result)
            throw new common_1.UnauthorizedException("Invalid token or expired!");
        const user = await this.UserModel.findById(result._id);
        const tokens = await this.issueTokenPair(String(user._id));
        return Object.assign({ user: this.returnUserFields(user) }, tokens);
    }
    async forgotPassword(forgotPasswordDto) {
        const user = await this.findByEmail(forgotPasswordDto.email);
        if (!user) {
            throw new common_1.BadRequestException("Invalid email");
        }
        const tokens = await this.issueTokenPair(String(user._id));
        const forgotLink = `http://localhost:3000/auth/forgotPassword?token=${tokens.accessToken}`;
        await this.mailService.send({ email: user.email, forgotLink });
        return "success";
    }
    async changePassword(token, changePasswordDto) {
        var decoded = this.jwtService.verify(token.token);
        console.log(decoded);
        if (!decoded)
            throw new common_1.BadRequestException("Token is bad");
        const salt = await (0, bcryptjs_1.genSalt)(10);
        const password = await (0, bcryptjs_1.hash)(changePasswordDto.password, salt);
        const user = await this.UserModel.findById(decoded._id);
        if (!user)
            throw new common_1.BadRequestException("Invalid token");
        user.password = password;
        await user.save();
        return user;
    }
    async findByEmail(email) {
        return this.UserModel.findOne({ email }).exec();
    }
    async validateUser(email, password) {
        const user = await this.findByEmail(email);
        if (!user)
            throw new common_1.UnauthorizedException("User not found");
        const isValidPassword = await (0, bcryptjs_1.compare)(password, user.password);
        if (!isValidPassword)
            throw new common_1.UnauthorizedException("Invalid password");
        return user;
    }
    async issueTokenPair(userId) {
        const data = { _id: userId };
        const refreshToken = await this.jwtService.signAsync(data, {
            expiresIn: "15d",
        });
        const accessToken = await this.jwtService.signAsync(data, {
            expiresIn: "1h",
        });
        return { refreshToken, accessToken };
    }
    returnUserFields(user) {
        return {
            _id: user._id,
            email: user.email,
            isAdmin: user.isAdmin,
            firsName: user.firstName,
            lastName: user.lastName,
            phone: user.phone
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(user_model_1.UserModel)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService,
        mail_service_1.MailService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map