import { TimeStamps, Base } from "@typegoose/typegoose/lib/defaultClasses";
export interface UserModel extends Base {
}
export declare class UserModel extends TimeStamps {
    email: string;
    password: string;
    isAdmin?: boolean;
    firstName: string;
    lastName?: string;
    phone?: string;
    have_read?: boolean;
    isPayment?: boolean;
    IdPayment: string | null;
}
