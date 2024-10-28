import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { TypegooseModule } from 'nestjs-typegoose'
import { getJWTConfig } from '../config/jwt.config'
import { JwtStrategy } from './strategies/jwt.strategy'
import { AuthController } from './auth.controller'
import { UserModel } from '../user/user.model'
import { AuthService } from './auth.service'
import { MailModule } from '../mail/mail.module'
import { MailService } from 'src/mail/mail.service'

@Module({
	controllers: [AuthController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: UserModel,
				schemaOptions: {
					collection: 'User',
				},
			},
		]),
		ConfigModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJWTConfig,
		}),
		MailModule
	],
	providers: [AuthService, JwtStrategy,MailService],
})
export class AuthModule {}
