/// <reference types="mongoose" />
import { JwtService } from "@nestjs/jwt";
import { ModelType } from "@typegoose/typegoose/lib/types";
import { RefreshTokenDto } from "./dto/refreshToken.dto";
import { AuthDto } from "./dto/auth.dto";
import { UserModel } from "../user/user.model";
import { ForgotPasswordDto } from "./dto/forgotPassword.dto";
import { MailService } from "src/mail/mail.service";
import { ChangePasswordDto } from "./dto/changePassword.dto";
export declare class AuthService {
    private readonly UserModel;
    private readonly jwtService;
    private readonly mailService;
    constructor(UserModel: ModelType<UserModel>, jwtService: JwtService, mailService: MailService);
    login({ email, password }: Pick<AuthDto, 'email' | 'password'>): Promise<{
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
    register({ email, password, firstName, lastName, phone }: AuthDto): Promise<{
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
    getNewTokens({ refreshToken }: RefreshTokenDto): Promise<{
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
    forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<string>;
    changePassword(token: any, changePasswordDto: ChangePasswordDto): Promise<any>;
    findByEmail(email: string): Promise<import("mongoose").Document<import("mongoose").Types.ObjectId, import("@typegoose/typegoose/lib/types").BeAnObject, any> & UserModel & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    validateUser(email: string, password: string): Promise<UserModel>;
    issueTokenPair(userId: string): Promise<{
        refreshToken: string;
        accessToken: string;
    }>;
    returnUserFields(user: UserModel): {
        _id: import("mongoose").Types.ObjectId;
        email: string;
        isAdmin: boolean;
        firsName: string;
        lastName: string;
        phone: string;
    };
}
