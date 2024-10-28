import {
 BadRequestException,
 Body,
 Controller,
 Get,
 HttpCode,
 Param,
 Patch,
 Post,
 Query,
 UseGuards,
 UsePipes,
 ValidationPipe,
} from "@nestjs/common";
import { RefreshTokenDto } from "./dto/refreshToken.dto";
import { AuthDto } from "./dto/auth.dto";
import { AuthService } from "./auth.service";
import { MailService } from "src/mail/mail.service";
import { ForgotPasswordDto } from "./dto/forgotPassword.dto";
import { AuthGuard } from "@nestjs/passport";
import { ChangePasswordDto } from "./dto/changePassword.dto";
import { GetUser } from "./decorators/user.decorator";

@Controller("auth")
export class AuthController {
 constructor(
  private readonly AuthService: AuthService,
  private readonly mailService: MailService
 ) {}

 @Post("mail")
 async mail(@Body() data: ForgotPasswordDto) {
  return this.mailService.send(data);
 }

 @UsePipes(new ValidationPipe())
 @HttpCode(200)
 @Post("login")
 async login(@Body() data: Pick<AuthDto,'email'| 'password'>) {
  return this.AuthService.login(data);
 }

 @UsePipes(new ValidationPipe())
 @HttpCode(200)
 @Post("login/access-token")
 async getNewTokens(@Body() data: RefreshTokenDto) {
  return this.AuthService.getNewTokens(data);
 }

 @Post("forgotPassword")
 async forgotPassword(
  @Body(new ValidationPipe()) forgotPasswordDto: ForgotPasswordDto
 ): Promise<any> {
  return this.AuthService.forgotPassword(forgotPasswordDto);
 }

 @Patch("changePassword")
 async changePassword(
  @Query() token:Promise<any>,
  @Body(new ValidationPipe()) changePasswordDto: ChangePasswordDto
 ): Promise<any> {
  return this.AuthService.changePassword(token, changePasswordDto);
 }

 @UsePipes(new ValidationPipe())
 @Post("register")
 async register(@Body() dto: AuthDto) {
  console.log(dto);
  
  const oldUser = await this.AuthService.findByEmail(dto.email);
  if (oldUser)
   throw new BadRequestException(
    "User with this email is already in the system"
   );
  return this.AuthService.register(dto);
 }
}
