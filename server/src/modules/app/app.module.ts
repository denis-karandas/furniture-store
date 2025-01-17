import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'modules/auth/auth.module';
import { FavoritesModule } from 'modules/favorites/favorites.module';
import { OrderModule } from 'modules/order/order.module';
import { ProductModule } from 'modules/product/product.module';

@Module({
    imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => ({
				type: 'mysql',
				host: configService.get('DB_HOST'),
				port: +configService.get<number>('DB_PORT'),
				username: configService.get('DB_USERNAME'),
				password: configService.get('DB_PASSWORD'),
				database: configService.get('DB_NAME'),
				entities: [__dirname + '/../**/*.entity.ts'],
				autoLoadEntities: true,
				synchronize: true,
				timezone: 'Z',
			}),
		}),
		AuthModule,
		ProductModule,
		OrderModule,
		FavoritesModule,
	],
})
export class AppModule {}
