import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ProductReview } from 'modules/product-review/product-review.entity';
import { User } from 'modules/user/user.entity';

@Entity('reviews')
export class Review {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    text: string;

    @Column({ type: 'tinyint' })
    score: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => ProductReview, productReview => productReview.reviews)
    @JoinColumn({ name: 'product_review_id' })
    product_review: ProductReview;
}