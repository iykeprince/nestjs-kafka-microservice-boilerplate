import { NestFactory } from '@nestjs/core';
import { EmailModule } from './email.module';

async function bootstrap() {
  const app = await NestFactory.create(EmailModule);
  await app.listen(3000);
}
bootstrap();
