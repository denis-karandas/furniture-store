import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { TransactionModule } from 'modules/transaction/transaction.module';
import { ProductImageModule } from 'modules/product-image/product-image.module';
import { ProductPriceModule } from 'modules/product-price/product-price.module';
import { ProductReviewModule } from 'modules/product-review/product-review.module';
import { ProductOrderModule } from 'modules/product-order/product-order.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Product]),
        MulterModule.register({
            storage: diskStorage({ destination: './uploads' }),
        }),
        TransactionModule,
        ProductImageModule,
        ProductPriceModule,
        ProductOrderModule,
        ProductReviewModule,
    ],
    controllers: [ProductController],
    providers: [ProductService],
    exports: [ProductService],
})
export class ProductModule {}
