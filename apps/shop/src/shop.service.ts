import { Injectable } from '@nestjs/common';

@Injectable()
export class ShopService {
  getHello(): string {
    return 'Hello World!';
  }
}
