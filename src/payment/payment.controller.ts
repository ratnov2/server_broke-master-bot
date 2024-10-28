import {
 Body,
 Controller,
 HttpCode,
 Post,
 UsePipes,
 ValidationPipe,
} from "@nestjs/common";
import { Auth } from "../auth/decorators/auth.decorator";

import { User } from '../user/decorators/user.decorator'

import { PaymentInfoDto } from "./dto/payment-info.dto";
import { PaymentStatusDto } from "./dto/payment-status.dto";
import { PaymentDto } from "./dto/payment.dto";
import { PaymentService } from "./payment.service";

@Controller("payment")
export class PaymentController {
 constructor(private readonly paymentService: PaymentService) {}


 
 @HttpCode(200)
 @Post()
 async createPayment(@User("_id") _id: string, @Body() dto: PaymentDto) {
  return this.paymentService.payment(_id, dto);
 }

 @HttpCode(200)
 @Post("status")
 async getPaymentStatus(@Body() dto: PaymentStatusDto) {
  return this.paymentService.paymentStatus(dto);
 }
//  @UsePipes(new ValidationPipe())
 @HttpCode(200)
 @Post("info")
 @Auth()
 async getPaymentInfo(@User("_id") _id: string, @Body() dto: PaymentInfoDto) {
  return this.paymentService.paymentInfo(_id, dto);
 }
}
