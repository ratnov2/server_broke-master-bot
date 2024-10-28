"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mail_service_1 = require("./mail.service");
const mailer_1 = require("@nestjs-modules/mailer");
let MailModule = class MailModule {
};
MailModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule, mailer_1.MailerModule.forRootAsync({
                useFactory: async (ConfigService) => ({
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
        providers: [mail_service_1.MailService],
        exports: [mail_service_1.MailService],
    })
], MailModule);
exports.MailModule = MailModule;
//# sourceMappingURL=mail.module.js.map