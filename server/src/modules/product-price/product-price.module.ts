import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductPriceService } from './product-price.service';
import { ProductPrice } from './product-price.entity';

@Module({
	imports: [
		TypeOrmModule.forFeature([ProductPrice]),
	],
	providers: [ProductPriceService],
	exports: [ProductPriceService],
})
export class ProductPriceModule {}
