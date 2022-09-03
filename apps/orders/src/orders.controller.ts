import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-order-request';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService
    ) {}

  @Post()
  createOrder(@Body() request: CreateOrderRequest) {
    return this.ordersService.createOrder(request);
  }

  @Get()
  getOrders(){
    return this.ordersService.getOrders()
  }
}
