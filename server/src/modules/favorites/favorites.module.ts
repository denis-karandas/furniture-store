import { Module } from '@nestjs/common';
import { FavoritesController } from './favorites.controller';
import { UserModule } from 'modules/user/user.module';
import { ProductModule } from 'modules/product/product.module';

@Module({
    imports: [UserModule, ProductModule],
    controllers: [FavoritesController]
})
export class FavoritesModule {}
