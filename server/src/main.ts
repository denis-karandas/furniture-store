import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    
    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());
    
    await app.listen(process.env.PORT);
}
bootstrap();