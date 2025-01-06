import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductImageService } from './product-image.service';
import { ProductImage } from './product-image.entity';
import { ImageModule } from 'modules/image/image.module';

@Module({
	imports: [
		TypeOrmModule.forFeature([ProductImage]),
		ImageModule,
	],
	providers: [ProductImageService],
	exports: [ProductImageService],
})
export class ProductImageModule {}
