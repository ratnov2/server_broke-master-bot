import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as fs from 'fs';

async function bootstrap() {
    let httpsOptions = {}
    if(process.env.IS_PRODUCTION === 'true'){
        httpsOptions = {
            key: fs.readFileSync('/etc/letsencrypt/live/chickentoken.ru/privkey.pem'),
            cert: fs.readFileSync('/etc/letsencrypt/live/chickentoken.ru/fullchain.pem'),
          };
    }
   

const app = await NestFactory.create(AppModule,{ httpsOptions });
 app.setGlobalPrefix("api");
 app.enableCors()
 await app.listen(parseInt(process.env.PORT, 10) || 3000);
}
bootstrap();
