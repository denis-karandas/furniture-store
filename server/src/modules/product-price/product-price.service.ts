import { Injectable } from '@nestjs/common';
import { QueryRunner } from 'typeorm';
import { ProductPrice } from './product-price.entity';

@Injectable()
export class ProductPriceService {
    create(queryRunner: QueryRunner, dto: { price: number }): Promise<ProductPrice> {
        return queryRunner.manager.save(ProductPrice, dto);
    }
}
