import { MailerService } from '@nestjs-modules/mailer';
export declare class MailService {
    private mailService;
    constructor(mailService: MailerService);
    send(data: any): Promise<any>;
}
