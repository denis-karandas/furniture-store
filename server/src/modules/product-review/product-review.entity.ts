import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from 'modules/product/product.entity';
import { Review } from 'modules/review/review.entity';

@Entity('product_reviews')
export class ProductReview {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    total: number;

    @Column()
    rating: number;

    @OneToOne(() => Product, product => product.product_review)
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @OneToMany(() => Review, review => review.product_review)
    reviews: Review[];
}