import {
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Body,
} from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() body: any) {
    return this.categoryService.create(body);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(Number(id));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(Number(id));
  }
}