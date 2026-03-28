import {
  IsString,
  IsNumber,
  IsArray,
  IsObject,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsNumber()
  rating: number;

  @IsNumber()
  categoryId: number;

  @IsArray()
  images: string[];

  @IsObject()
  specs: Record<string, string>;
}