import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    
    app.enableCors({
        origin: true,
        credentials: true,
    });
    app.use(cookieParser());
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
        })
    );
    
    await app.listen(process.env.PORT);
}
bootstrap();
