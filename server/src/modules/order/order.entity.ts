import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { User } from 'modules/user/user.entity';
import { OrderStatus } from './order.enums';

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: OrderStatus.CREATED })
    status: number;

    @Column()
    total_amount: number;

    @Column()
    payment_method: number;

    @Column()
    payment_status: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;
}