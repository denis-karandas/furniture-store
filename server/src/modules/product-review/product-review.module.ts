import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductReview } from './product-review.entity';
import { ReviewModule } from 'modules/review/review.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProductReview]),
        ReviewModule,
    ],
})
export class ProductReviewModule {}
