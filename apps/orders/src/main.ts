import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'
import { OrdersModule } from './orders.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(OrdersModule);
  app.useGlobalPipes(new ValidationPipe())
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}
bootstrap();
