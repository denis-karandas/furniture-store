import { Product } from 'modules/product/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'product_images' })
export class ProductImage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    path: string;

    @Column()
    alt: string;

    @Column()
    order: number;

    @ManyToOne(() => Product, product => product.images)
    product: Product;
}
