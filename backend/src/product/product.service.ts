import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { Category } from '../category/сategory.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product>,

    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
  ) {}

  async create(dto: any) {
    const category = await this.categoryRepo.findOne({
      where: { id: dto.categoryId },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    const product = this.productRepo.create({
      name: dto.name,
      price: dto.price,
      rating: dto.rating,
      sales: dto.sales || false,
      category,
      images: dto.images || [],
      specs: dto.specs || {},
    });

    return this.productRepo.save(product);
  }

  findAll() {
    return this.productRepo.find({
      relations: ['category'],
    });
  }

  findOne(id: number) {
    return this.productRepo.findOne({
      where: { id },
      relations: ['category'],
    });
  }

  findOnSale() {
    return this.productRepo.find({
      where: { sales: true },
      relations: ['category'],
    });
  }

  async updateSales(id: number, sales: boolean) {
    await this.productRepo.update(id, { sales });
    return this.findOne(id);
  }

  async remove(id: number) {
    return this.productRepo.delete(id);
  }
}
