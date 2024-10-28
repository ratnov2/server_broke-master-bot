import { PaymentInfoDto } from "./dto/payment-info.dto";
import { PaymentStatusDto } from "./dto/payment-status.dto";
import { PaymentDto } from "./dto/payment.dto";
import { PaymentService } from "./payment.service";
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    createPayment(_id: string, dto: PaymentDto): Promise<any>;
    getPaymentStatus(dto: PaymentStatusDto): Promise<void>;
    getPaymentInfo(_id: string, dto: PaymentInfoDto): Promise<{
        response: boolean;
    }>;
}
