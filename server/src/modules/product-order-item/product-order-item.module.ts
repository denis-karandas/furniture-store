import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductOrderItemService } from './product-order-item.service';
import { ProductOrderItem } from './product-order-item.entity';

@Module({
	imports: [
		TypeOrmModule.forFeature([ProductOrderItem]),
	],
	providers: [ProductOrderItemService]
})
export class ProductOrderItemModule {}
