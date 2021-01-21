import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import register from '@react-ssr/nestjs-express/register';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  await register(app);
  await app.listen(3000, async () => {
    console.log(`> Ready on http://localhost:3000`);
  });
}
bootstrap();
