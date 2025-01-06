import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductOrder } from './product-order.entity';
import { ProductOrderItemModule } from 'modules/product-order-item/product-order-item.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProductOrder]),
        ProductOrderItemModule,
    ],
})
export class ProductOrderModule {}
