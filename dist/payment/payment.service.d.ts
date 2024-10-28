import { ModelType } from "@typegoose/typegoose/lib/types";
import { UserModel } from "../user/user.model";
import { PaymentInfoDto } from "./dto/payment-info.dto";
import { PaymentStatusDto } from "./dto/payment-status.dto";
import { PaymentDto } from "./dto/payment.dto";
export declare class PaymentService {
    private readonly userModel;
    constructor(userModel: ModelType<UserModel>);
    payment(id: string, dto: PaymentDto): Promise<any>;
    paymentStatus(dto: PaymentStatusDto): Promise<void>;
    paymentInfo(_id: string, dto: PaymentInfoDto): Promise<{
        response: boolean;
    }>;
}
