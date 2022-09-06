import { NestFactory } from '@nestjs/core';
import { ShopModule } from './shop.module';

async function bootstrap() {
  const app = await NestFactory.create(ShopModule);
  await app.listen(3000);
}
bootstrap();
