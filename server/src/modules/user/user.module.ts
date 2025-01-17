import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { User } from './user.entity';
import { ProductModule } from 'modules/product/product.module';
import { UserFavoritesService } from './user-favorites.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        ProductModule
    ],
    providers: [
        UserService,
        UserFavoritesService,
    ],
    exports: [
        UserService,
        UserFavoritesService,
    ],
})
export class UserModule {}