import { IsEmail, IsNotEmpty } from "class-validator";
import { ForgotPasswordDto } from "src/auth/dto/forgotPassword.dto";


export class MailDto extends ForgotPasswordDto{
  @IsNotEmpty()
  forgotLink:string
}