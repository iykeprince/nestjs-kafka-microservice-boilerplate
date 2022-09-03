import { RmqService } from '@app/common';
import { Controller, Get } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { BillingService } from './billing.service';

@Controller()
export class BillingController {
  constructor(
    private readonly billingService: BillingService,
    private readonly rmqService: RmqService
    ) {}

  @Get()
  getHello(): string {
    return this.billingService.getHello();
  }

  @EventPattern('order_created')
  handleOrderCreated(@Payload() data: any, @Ctx() context: RmqContext){
    console.log('order created payload', data)
    this.billingService.bill(data);
    this.rmqService.ack(context);
  }
}
