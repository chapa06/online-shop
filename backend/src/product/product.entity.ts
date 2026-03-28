import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Category } from '../category/сategory.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('float')
  price: number;

  @Column('float')
  rating: number;

  @ManyToOne(() => Category, (category) => category.products, {
    onDelete: 'CASCADE',
  })
  category: Category;

  @Column('text', { array: true, default: [] })
  images: string[];

  @Column({ type: 'jsonb', nullable: true })
  specs: Record<string, string>;
}