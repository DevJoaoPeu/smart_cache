import { Body, Controller, Get, Post } from '@nestjs/common';
import { Product } from './product.entity';
import { AppService } from './app.service';

@Controller('products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.appService.findAll();
  }

  @Post()
  create(@Body() product: Partial<Product>): Promise<Product> {
    return this.appService.create(product);
  }
}
