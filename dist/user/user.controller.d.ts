import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getff(): Promise<import("@typegoose/typegoose").DocumentType<import("./user.model").UserModel, import("@typegoose/typegoose/lib/types").BeAnObject>[]>;
    getProfile(_id: string): Promise<import("@typegoose/typegoose").DocumentType<import("./user.model").UserModel, import("@typegoose/typegoose/lib/types").BeAnObject>>;
    updateProfile(_id: string, data: {
        have_read: boolean;
    }): Promise<boolean>;
}
