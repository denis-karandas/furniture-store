import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderService } from './order.service';
import { Order } from './order.entity';

@Module({
	imports: [
		TypeOrmModule.forFeature([Order]),
	],
	providers: [OrderService]
})
export class OrderModule {}
