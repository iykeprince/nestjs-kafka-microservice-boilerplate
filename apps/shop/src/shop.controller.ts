import { Controller, Get } from '@nestjs/common';
import { ShopService } from './shop.service';

@Controller()
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get()
  getHello(): string {
    return this.shopService.getHello();
  }
}
