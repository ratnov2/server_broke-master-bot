import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'

import { AppController } from './app.controller'
import { AppService } from './app.service'


import { AuthModule } from './auth/auth.module'
import { getMongoConfig } from './config/mongo.config'
import { FilesModule } from './files/files.module'

import { TypegooseModule } from 'nestjs-typegoose'
import { PaymentModule } from './payment/payment.module';
import { UserModule } from './user/user.module'
import { MailModule } from './mail/mail.module';


@Module({
	imports: [
		ConfigModule.forRoot(),
		TypegooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMongoConfig,
		}),
		AuthModule,
		FilesModule,
		PaymentModule,
		UserModule,
		MailModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
