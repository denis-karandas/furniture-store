import { BadRequestException, Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { Pagination } from 'nestjs-typeorm-paginate';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductService } from 'modules/product/product.service';
import { Product } from 'modules/product/product.entity';
import { FindAllProductsDto } from 'modules/favorites/dto';

@Injectable()
export class UserFavoritesService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly productService: ProductService,
    ) {}

    async findAll(
        { limit = 10, page = 1 }: FindAllProductsDto,
        userId: number
    ): Promise<Pagination<Product>> {
        const user = await this.userRepository.findOne({
            where: {
                id: userId,
            },
            relations: {
                favorite_products: true,
            },
        });

        const favoriteProductIds = user.favorite_products
            ? user.favorite_products.map(item => item.id)
            : [];

        return this.productService.findFavorites({ limit, page }, favoriteProductIds);
    }

    async add(userId: number, productId: number): Promise<{ status: string; }> {
        const user = await this.userRepository.findOne({
            where: {
                id: userId
            },
            relations: {
                favorite_products: true,
            },
        });

        const favoriteProductIds = user.favorite_products
            ? user.favorite_products.map(item => item.id)
            : [];
        
        if (favoriteProductIds.includes(productId)) {
            throw new BadRequestException('The product has already been added');
        }

        const product = await this.productService.findOne({
            where: {
                id: productId,
            },
        });

        if (user.favorite_products) {
            user.favorite_products.push(product);
        }
        else {
            user.favorite_products = [product];
        }

        await this.userRepository.save(user);

        return { status: 'success' };
    }

    async deleteOne(userId: number, productId: number): Promise<{ status: string; }> {
        const user = await this.userRepository.findOne({
            where: {
                id: userId
            },
            relations: {
                favorite_products: true,
            },
        });

        user.favorite_products = user.favorite_products.filter(item => item.id !== productId);

        await this.userRepository.save(user);

        return { status: 'success' };
    }
}