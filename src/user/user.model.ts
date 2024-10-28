import { prop, Ref } from "@typegoose/typegoose";
import { TimeStamps, Base } from "@typegoose/typegoose/lib/defaultClasses";

export interface UserModel extends Base {}

export class UserModel extends TimeStamps {
 @prop({ unique: true })
 email: string;

 @prop()
 password: string;

 @prop({ default: false })
 isAdmin?: boolean;

 @prop()
 firstName: string;

 @prop({ default: '' })
 lastName?: string;

 @prop({ default: '' })
 phone?: string;

 @prop({ default: false })
 have_read?: boolean;

 @prop({ default: false })
 isPayment?: boolean;

 @prop({ default: null })
 IdPayment: string| null;
}
