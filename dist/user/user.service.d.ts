import { ModelType, DocumentType } from "@typegoose/typegoose/lib/types";
import { UserModel } from "./user.model";
export declare class UserService {
    private readonly userModel;
    constructor(userModel: ModelType<UserModel>);
    byId(id: string): Promise<DocumentType<UserModel>>;
    updateProfile(_id: string, data: {
        have_read: boolean;
    }): Promise<boolean>;
    getCount(): Promise<number>;
    getAll(searchTerm?: string): Promise<DocumentType<UserModel>[]>;
    delete(id: string): Promise<DocumentType<UserModel> | null>;
}
