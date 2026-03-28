import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres', // или localhost
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'shop',
      autoLoadEntities: true,
      synchronize: true,
    }),

    CategoryModule,
    ProductModule,
  ],
})
export class AppModule {}