import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from 'modules/product/product.entity';
import { ProductPrice } from 'modules/product-price/product-price.entity';
import { ProductOrder } from 'modules/product-order/product-order.entity';

@Entity('product_order_items')
export class ProductOrderItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;

    @ManyToOne(() => ProductOrder, productCart => productCart.product_order_items)
    @JoinColumn({ name: 'product_order_id' })
    product_order: ProductOrder;

    @ManyToOne(() => Product, product => product.product_images)
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @OneToOne(() => ProductPrice)
    @JoinColumn({ name: 'product_price_id' })
    product_price: ProductPrice;
}