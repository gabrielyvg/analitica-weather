import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    exceptionFactory: (errors) => {
      const messages = errors.reduce((acc, error) => {
        if (error.constraints) {
          Object.values(error.constraints).forEach((message) => acc.push(message));
        }
        return acc;
      }, []);

      return new BadRequestException({
        statusCode: 400,
        message: messages,
        error: 'Bad Request',
      });
    },
  }));
}
bootstrap();
