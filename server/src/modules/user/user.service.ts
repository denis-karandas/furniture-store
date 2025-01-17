import { BadRequestException, Injectable } from '@nestjs/common';
import { FindOneOptions, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto';
import { ProductService } from 'modules/product/product.service';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly productService: ProductService,
    ) {}

    findOne(options: FindOneOptions<User>): Promise<User> {
        return this.userRepository.findOne(options);
    }

    findById(id: number): Promise<User> {
        return this.userRepository.findOneBy({ id });
    }

    findByEmail(email: string): Promise<User> {
        return this.userRepository.findOneBy({ email });
    }

    async create(dto: CreateUserDto): Promise<User> {
        const hashedPassword = await bcrypt.hash(dto.password, 10);

        return this.userRepository.save({ ...dto, password: hashedPassword });
    }

    async addFavorite(userId: number, productId: number) {
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

        return this.userRepository.save(user);
    }

    async deleteFavorite(userId: number, productId: number) {
        const user = await this.userRepository.findOne({
            where: {
                id: userId
            },
            relations: {
                favorite_products: true,
            },
        });

        user.favorite_products = user.favorite_products.filter(item => item.id !== productId);

        return this.userRepository.save(user);
    }

    static format(user: User) {
        const { password, ...anotherFields } = user;

        return anotherFields;
    };
}