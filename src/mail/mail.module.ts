import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailService } from './mail.service';
import { MailgunModule } from 'nestjs-mailgun';
import {MailerModule} from '@nestjs-modules/mailer'

@Module({
  imports:[ConfigModule, MailerModule.forRootAsync({
    useFactory: async (ConfigService: ConfigService) => ({
      transport: {
        host: process.env.MAILGUN_API_HOST,
        secure: false,
        auth: {
          user: 'postmaster@sandbox441fa5d619674b3e880478fd4f5456ec.mailgun.org',
          pass: 'cdb5085ac157dae4be30ae463b044cff-52d193a0-e4e2c170',
        },
      },
    }),
  }),
],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}