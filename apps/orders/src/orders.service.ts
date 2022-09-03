import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { BILLING_SERVICE } from './constants/services';
import { CreateOrderRequest } from './dto/create-order-request';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(
      private readonly ordersRepository: OrdersRepository,
      @Inject(BILLING_SERVICE) private billingClient: ClientProxy,
    ){}

  async createOrder(request: CreateOrderRequest) {
    const session = await this.ordersRepository.startTransaction();
    try{
      const order = await this.ordersRepository.create(request, {session})
      console.log('emitting...')
      await lastValueFrom(this.billingClient.emit('order_created', {
        request
      }))
      console.log('emitted!')
      await session.commitTransaction()
      return order;
    }catch(error){
      console.log('Error!:', error)
      await session.abortTransaction();
      throw error;
    }
  }

  async getOrders(){
    return this.ordersRepository.find({})
  }
}
