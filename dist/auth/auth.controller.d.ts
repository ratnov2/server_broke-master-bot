/// <reference types="mongoose" />
import { RefreshTokenDto } from "./dto/refreshToken.dto";
import { AuthDto } from "./dto/auth.dto";
import { AuthService } from "./auth.service";
import { MailService } from "src/mail/mail.service";
import { ForgotPasswordDto } from "./dto/forgotPassword.dto";
import { ChangePasswordDto } from "./dto/changePassword.dto";
export declare class AuthController {
    private readonly AuthService;
    private readonly mailService;
    constructor(AuthService: AuthService, mailService: MailService);
    mail(data: ForgotPasswordDto): Promise<any>;
    login(data: Pick<AuthDto, 'email' | 'password'>): Promise<{
        refreshToken: string;
        accessToken: string;
        user: {
            _id: import("mongoose").Types.ObjectId;
            email: string;
            isAdmin: boolean;
            firsName: string;
            lastName: string;
            phone: string;
        };
    }>;
    getNewTokens(data: RefreshTokenDto): Promise<{
        refreshToken: string;
        accessToken: string;
        user: {
            _id: import("mongoose").Types.ObjectId;
            email: string;
            isAdmin: boolean;
            firsName: string;
            lastName: string;
            phone: string;
        };
    }>;
    forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<any>;
    changePassword(token: Promise<any>, changePasswordDto: ChangePasswordDto): Promise<any>;
    register(dto: AuthDto): Promise<{
        refreshToken: string;
        accessToken: string;
        user: {
            _id: import("mongoose").Types.ObjectId;
            email: string;
            isAdmin: boolean;
            firsName: string;
            lastName: string;
            phone: string;
        };
    }>;
}
