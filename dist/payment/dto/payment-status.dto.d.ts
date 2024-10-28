declare class AmountPayment {
    value: string;
    currency: string;
}
declare class ObjectPayment {
    id: string;
    status: string;
    amount: AmountPayment;
    payment_method: {
        type: string;
        id: number;
        saved: boolean;
        title: string;
        card: object;
    };
}
export declare class PaymentStatusDto {
    type: string;
    event: 'payment_succeeded' | 'payment.waiting_for_capture' | string;
    object: ObjectPayment;
}
export {};
