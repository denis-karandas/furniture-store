import { ProductImage } from 'modules/product-image/product-image.entity';
import { ProductPrice } from 'modules/product-price/product-price.entity';
import { ProductReview } from 'modules/product-review/product-review.entity';
import { User } from 'modules/user/user.entity';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    slug: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => ProductImage, productImage => productImage.product)
    product_images: ProductImage[];

    @OneToOne(() => ProductPrice, productPrice => productPrice.product)
    product_price: ProductPrice;

    @OneToOne(() => ProductReview, productReview => productReview.product)
    product_review: ProductReview;

    @ManyToMany(() => User)
    @JoinTable({
        name: 'favorite_products',
        joinColumn: {
            name: 'product_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'user_id',
            referencedColumnName: 'id',
        },
    })
    favorite_users: User[];

    is_favorite: string | boolean;
}
