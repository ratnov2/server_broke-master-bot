import { Injectable } from '@nestjs/common';
import {MailerService} from '@nestjs-modules/mailer'


@Injectable()
export class MailService {
   constructor(private mailService:MailerService){}

   async send(data: any):Promise<any>{
        await this.mailService.sendMail({
            to:data.email,
            from:'broker8rok@yandex.ru',
            subject:'Simple',
            text:'welcome',
            html:`
            <p>Hello<p>
            <a href='${data.forgotLink}'>link</a>
            `
        })
        return 'succes'
}
   
}