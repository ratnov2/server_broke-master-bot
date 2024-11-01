"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const fs = require("fs");
async function bootstrap() {
    let httpsOptions = {};
    if (process.env.IS_PRODUCTION === 'true') {
        httpsOptions = {
            key: fs.readFileSync('/etc/letsencrypt/live/chickentoken.ru/privkey.pem'),
            cert: fs.readFileSync('/etc/letsencrypt/live/chickentoken.ru/fullchain.pem'),
        };
    }
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { httpsOptions });
    app.setGlobalPrefix("api");
    app.enableCors();
    await app.listen(parseInt(process.env.PORT, 10) || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map