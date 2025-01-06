import { Image } from 'modules/image/image.entity';
import { Product } from 'modules/product/product.entity';
import { Column, Entity, Generated, Index, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product_images')
export class ProductImage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    order: number;

    @ManyToOne(() => Product, product => product.product_images)
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @OneToOne(() => Image)
    @JoinColumn({ name: 'image_id' })
    image: Image;

    @OneToOne(() => Image)
    @JoinColumn({ name: 'placeholder_image_id' })
    placeholder_image: Image;
}