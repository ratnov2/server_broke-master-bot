/// <reference types="mongoose" />
import { ConfigService } from '@nestjs/config';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Strategy } from 'passport-jwt';
import { UserModel } from '../../user/user.model';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    private readonly UserModel;
    constructor(configService: ConfigService, UserModel: ModelType<UserModel>);
    validate({ _id }: Pick<UserModel, '_id'>): Promise<import("mongoose").Document<import("mongoose").Types.ObjectId, import("@typegoose/typegoose/lib/types").BeAnObject, any> & UserModel & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
export {};
