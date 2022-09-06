import { Test, TestingModule } from '@nestjs/testing';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';

describe('EmailController', () => {
  let emailController: EmailController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EmailController],
      providers: [EmailService],
    }).compile();

    emailController = app.get<EmailController>(EmailController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(emailController.getHello()).toBe('Hello World!');
    });
  });
});
