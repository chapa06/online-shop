import {
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Body,
  Patch,
  ParseBoolPipe,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() body: any) {
    return this.productService.create(body);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(Number(id));
  }

  @Patch(':id/sales')
  updateSales(
    @Param('id') id: string,
    @Query('sales', ParseBoolPipe) sales: boolean,
  ) {
    return this.productService.updateSales(Number(id), sales);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(Number(id));
  }

  @Get('sales/on')
  findOnSale() {
    return this.productService.findOnSale();
  }
}
