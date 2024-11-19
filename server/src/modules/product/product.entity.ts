import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductImage } from 'modules/productImage/productImage.entity';

@Entity({ name: 'products' })
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    code: string;

    @Column()
    rating: number;

    @Column({ name: 'total_reviews' })
    totalReviews: number;

    @OneToMany(() => ProductImage, productImage => productImage.product)
    images: ProductImage[];
}
