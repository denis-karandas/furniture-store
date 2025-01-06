import { Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductOrderItem } from 'modules/product-order-item/product-order-item.entity';
import { Order } from 'modules/order/order.entity';

@Entity('product_orders')
export class ProductOrder {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => ProductOrderItem, productOrderItem => productOrderItem.product_order)
    product_order_items: ProductOrderItem[];

    @OneToOne(() => Order)
    @JoinColumn({ name: 'order_id' })
    order: Order;
}