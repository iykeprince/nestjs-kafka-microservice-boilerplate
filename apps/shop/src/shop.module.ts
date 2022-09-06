import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';
import { CategoryModule } from './category/category.module';
import * as Joi from 'joi'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // validationSchema: Joi.object({
      //   MONGODB_URI: Joi.string().required(),
      //   PORT: Joi.string().required()
      // })
    }),
    CategoryModule
  ],
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopModule {}
