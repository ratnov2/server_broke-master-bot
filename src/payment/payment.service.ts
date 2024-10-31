import { Injectable } from "@nestjs/common";
import { ModelType } from "@typegoose/typegoose/lib/types";
import { InjectModel } from "nestjs-typegoose";
import { UserModel } from "../user/user.model";
// import * as YooKassa from "yookassa";
const YooKassa = require('yookassa');
import { PaymentInfoDto } from "./dto/payment-info.dto";
import { PaymentStatusDto } from "./dto/payment-status.dto";
import { PaymentDto } from "./dto/payment.dto";

const yooKassa = new YooKassa({
 shopId: "480065",
 secretKey: "test_ZNH3IOeg43MEKUMKpPk0cwUqod2UF51yIT_IwZTZOhk",
});

@Injectable()
export class PaymentService {
 constructor(
  @InjectModel(UserModel) private readonly userModel: ModelType<UserModel>
 ) {}
 async payment(id: string, dto: PaymentDto) {
  const user = {_id:22};
//   if (!user || user.isPayment) return;

  const payment = await yooKassa.createPayment({
   amount: {
    value: dto.amount.toFixed(2),
    currency: "RUB",
   },
  //  payment_method_data: {
  //   type: "bank_card",
  //  },
  //  "confirmation": {
  //   "type": "redirect"
  // },
   confirmation: {
    type: "embedded",
    // return_url: process.env.REDIRECT_URL,
   },
   description: "Заказ №72",
   capture: true,
  //  merchant_customer_id: user._id,
   //  receipt: {
   //   customer: {
   //    full_name: "Иванов Иван Иванович",
   //    phone: "79000000000",
   //   },
   //   items: [
   //    {
   //     description: "Наименование товара 1",
   //     quantity: 2.0,
   //     amount: {
   //      value: 250.0,
   //      currency: "RUB",
   //     },
   //     vat_code: "2",
   //     payment_mode: "full_prepayment",
   //     payment_subject: "commodity",
   //    },
   //   ],
   //},
  });
  //if(payment) user.
  if (payment) {
    console.log('wef!!!PAYm');
    
//    user.IdPayment = payment.id;
//    await user.save();
   return payment;
  }
 }

 async paymentStatus(dto: PaymentStatusDto) {
  if (dto.event !== "payment.waiting_for_capture") return;
  //const user = await this.userModel.findById(_id);
  // console.log(user);

  // if(user){
  //   user.isPayment = true
  // }

  //const payment = await yooKassa.capturePayment(dto.object.id);

  // return payment;
 }
 async paymentInfo(_id: string, dto: PaymentInfoDto) {
  const user = await this.userModel.findById(_id).exec();
  if (!user.IdPayment) return;

  const payment = await yooKassa.getPayment(user.IdPayment);

  if (payment.status === "succeeded") {
   user.isPayment = true;
   await user.save();
   return {
    response: true,
   };
  }
  return {
   response: false,
  };
  //const user = await this.userModel.findById(_id);
  // console.log(user);

  // if(user){
  //   user.isPayment = true
  // }

  //const payment = await yooKassa.capturePayment(dto.object.id);

  // return payment;
 }
}
