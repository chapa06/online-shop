import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './сategory.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
  ) {}

  create(dto: any) {
    const category = this.categoryRepo.create(dto);
    return this.categoryRepo.save(category);
  }

  findAll() {
    return this.categoryRepo.find({
      relations: ['products'],
    });
  }

  findOne(id: number) {
    return this.categoryRepo.findOne({
      where: { id },
      relations: ['products'],
    });
  }

  async remove(id: number) {
    return this.categoryRepo.delete(id);
  }
}