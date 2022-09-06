import { Controller, Get } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller()
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get()
  getHello(): string {
    return this.emailService.getHello();
  }
}
