import {
  IsString,
  IsNumber,
  IsArray,
  IsObject,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsNumber()
  rating: number;

  @IsBoolean()
  @IsOptional()
  sales?: boolean;

  @IsNumber()
  categoryId: number;

  @IsArray()
  images: string[];

  @IsObject()
  specs: Record<string, string>;
}
