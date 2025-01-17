import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, FindManyOptions, FindOneOptions, FindOptionsWhere, In, QueryRunner, Repository } from 'typeorm';
import { paginate, Pagination, PaginationTypeEnum } from 'nestjs-typeorm-paginate';
import { TransactionService } from 'modules/transaction/transaction.service';
import { ProductImageService } from 'modules/product-image/product-image.service';
import { StringService } from 'modules/string/string.service';
import { ProductPriceService } from 'modules/product-price/product-price.service';
import { Product } from './product.entity';
import { CreateProductDto, FindAllProductsDto, FindBestSellersProductsDto, FindFavoriteProductsDto, FindFeaturedProductsDto, FindRecentProductsDto, FindTopProductsDto, FindTrendingProductsDto } from './dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
        private readonly transactionService: TransactionService,
        private readonly productImageService: ProductImageService,
        private readonly productPriceService: ProductPriceService,
    ) {}

    async findAll(
        { limit = 10, page = 1 }: FindAllProductsDto,
        userId: number,
    ): Promise<Pagination<Product>> {
        const queryBuilder = this.productRepository.createQueryBuilder('product')
            .leftJoinAndSelect('product.product_images', 'product_images')
            .leftJoinAndSelect('product_images.image', 'image')
            .leftJoinAndSelect('product_images.placeholder_image', 'placeholder_image')
            .leftJoin(
                'favorite_products',
                'favorite_products',
                'favorite_products.product_id = product.id AND favorite_products.user_id = :user_id',
                { user_id: userId },
            )
            .addSelect('CASE WHEN favorite_products.user_id IS NOT NULL THEN true ELSE false END', 'is_favorite')
            .take(limit)
            .skip((page - 1) * limit);

        const { entities, raw } = await queryBuilder.getRawAndEntities();
        const totalItems = await queryBuilder.getCount();

        const rawItemsObject = raw.reduce((prev, curr) => ({ ...prev, [curr.product_id]: curr }), {});

        const items = entities.map(item => ({
            ...item,
            is_favorite: rawItemsObject[item.id]?.is_favorite === '1',
        }));

        return {
            items,
            meta: {
                totalItems,
                itemCount: items.length,
                itemsPerPage: limit,
                totalPages: Math.ceil(totalItems / limit),
                currentPage: page,
            },
        };
    }

    async findTop(
        { limit = 10, page = 1 }: FindTopProductsDto,
        userId: number,
    ): Promise<Pagination<Product>> {
        const queryBuilder = this.productRepository.createQueryBuilder('product')
            .leftJoinAndSelect('product.product_images', 'product_images')
            .leftJoinAndSelect('product_images.image', 'image')
            .leftJoinAndSelect('product_images.placeholder_image', 'placeholder_image')
            .leftJoin(
                'favorite_products',
                'favorite_products',
                'favorite_products.product_id = product.id AND favorite_products.user_id = :user_id',
                { user_id: userId },
            )
            .addSelect('CASE WHEN favorite_products.user_id IS NOT NULL THEN true ELSE false END', 'is_favorite')
            .take(limit)
            .skip((page - 1) * limit);

        const { entities, raw } = await queryBuilder.getRawAndEntities();
        const totalItems = await queryBuilder.getCount();

        const rawItemsObject = raw.reduce((prev, curr) => ({ ...prev, [curr.product_id]: curr }), {});

        const items = entities.map(item => ({
            ...item,
            is_favorite: rawItemsObject[item.id]?.is_favorite === '1',
        }));

        return {
            items,
            meta: {
                totalItems,
                itemCount: items.length,
                itemsPerPage: limit,
                totalPages: Math.ceil(totalItems / limit),
                currentPage: page,
            },
        };
    }

    async findRecent(
        { limit = 10, page = 1 }: FindRecentProductsDto,
        userId: number,
    ): Promise<Pagination<Product>> {
        const queryBuilder = this.productRepository.createQueryBuilder('product')
            .leftJoinAndSelect('product.product_images', 'product_images')
            .leftJoinAndSelect('product_images.image', 'image')
            .leftJoinAndSelect('product_images.placeholder_image', 'placeholder_image')
            .leftJoin(
                'favorite_products',
                'favorite_products',
                'favorite_products.product_id = product.id AND favorite_products.user_id = :user_id',
                { user_id: userId },
            )
            .addSelect('CASE WHEN favorite_products.user_id IS NOT NULL THEN true ELSE false END', 'is_favorite')
            .take(limit)
            .skip((page - 1) * limit);

        const { entities, raw } = await queryBuilder.getRawAndEntities();
        const totalItems = await queryBuilder.getCount();

        const rawItemsObject = raw.reduce((prev, curr) => ({ ...prev, [curr.product_id]: curr }), {});

        const items = entities.map(item => ({
            ...item,
            is_favorite: rawItemsObject[item.id]?.is_favorite === '1',
        }));

        return {
            items,
            meta: {
                totalItems,
                itemCount: items.length,
                itemsPerPage: limit,
                totalPages: Math.ceil(totalItems / limit),
                currentPage: page,
            },
        };
    }

    async findTrending(
        { limit = 10, page = 1 }: FindTrendingProductsDto,
        userId: number,
    ): Promise<Pagination<Product>> {
        const queryBuilder = this.productRepository.createQueryBuilder('product')
            .leftJoinAndSelect('product.product_images', 'product_images')
            .leftJoinAndSelect('product_images.image', 'image')
            .leftJoinAndSelect('product_images.placeholder_image', 'placeholder_image')
            .leftJoin(
                'favorite_products',
                'favorite_products',
                'favorite_products.product_id = product.id AND favorite_products.user_id = :user_id',
                { user_id: userId },
            )
            .addSelect('CASE WHEN favorite_products.user_id IS NOT NULL THEN true ELSE false END', 'is_favorite')
            .take(limit)
            .skip((page - 1) * limit);

        const { entities, raw } = await queryBuilder.getRawAndEntities();
        const totalItems = await queryBuilder.getCount();

        const rawItemsObject = raw.reduce((prev, curr) => ({ ...prev, [curr.product_id]: curr }), {});

        const items = entities.map(item => ({
            ...item,
            is_favorite: rawItemsObject[item.id]?.is_favorite === '1',
        }));

        return {
            items,
            meta: {
                totalItems,
                itemCount: items.length,
                itemsPerPage: limit,
                totalPages: Math.ceil(totalItems / limit),
                currentPage: page,
            },
        };
    }

    async findBestSellers(
        { limit = 10, page = 1 }: FindBestSellersProductsDto,
        userId: number,
    ): Promise<Pagination<Product>> {
        const queryBuilder = this.productRepository.createQueryBuilder('product')
            .leftJoinAndSelect('product.product_images', 'product_images')
            .leftJoinAndSelect('product_images.image', 'image')
            .leftJoinAndSelect('product_images.placeholder_image', 'placeholder_image')
            .leftJoin(
                'favorite_products',
                'favorite_products',
                'favorite_products.product_id = product.id AND favorite_products.user_id = :user_id',
                { user_id: userId },
            )
            .addSelect('CASE WHEN favorite_products.user_id IS NOT NULL THEN true ELSE false END', 'is_favorite')
            .take(limit)
            .skip((page - 1) * limit);

        const { entities, raw } = await queryBuilder.getRawAndEntities();
        const totalItems = await queryBuilder.getCount();

        const rawItemsObject = raw.reduce((prev, curr) => ({ ...prev, [curr.product_id]: curr }), {});

        const items = entities.map(item => ({
            ...item,
            is_favorite: rawItemsObject[item.id]?.is_favorite === '1',
        }));

        return {
            items,
            meta: {
                totalItems,
                itemCount: items.length,
                itemsPerPage: limit,
                totalPages: Math.ceil(totalItems / limit),
                currentPage: page,
            },
        };
    }

    async findFeatured(
        { limit = 10, page = 1 }: FindFeaturedProductsDto,
        userId: number,
    ): Promise<Pagination<Product>> {
        const queryBuilder = this.productRepository.createQueryBuilder('product')
            .leftJoinAndSelect('product.product_images', 'product_images')
            .leftJoinAndSelect('product_images.image', 'image')
            .leftJoinAndSelect('product_images.placeholder_image', 'placeholder_image')
            .leftJoin(
                'favorite_products',
                'favorite_products',
                'favorite_products.product_id = product.id AND favorite_products.user_id = :user_id',
                { user_id: userId },
            )
            .addSelect('CASE WHEN favorite_products.user_id IS NOT NULL THEN true ELSE false END', 'is_favorite')
            .take(limit)
            .skip((page - 1) * limit);

        const { entities, raw } = await queryBuilder.getRawAndEntities();
        const totalItems = await queryBuilder.getCount();

        const rawItemsObject = raw.reduce((prev, curr) => ({ ...prev, [curr.product_id]: curr }), {});

        const items = entities.map(item => ({
            ...item,
            is_favorite: rawItemsObject[item.id]?.is_favorite === '1',
        }));

        return {
            items,
            meta: {
                totalItems,
                itemCount: items.length,
                itemsPerPage: limit,
                totalPages: Math.ceil(totalItems / limit),
                currentPage: page,
            },
        };
    }

    async findFavorites(
        { limit = 10, page = 1 }: FindFavoriteProductsDto,
        favoriteProductIds: number[]
    ): Promise<Pagination<Product>> {
        return paginate(
            this.productRepository,
            {
                limit,
                page,
                paginationType: PaginationTypeEnum.TAKE_AND_SKIP,
            },
            {
                where: {
                    id: In(favoriteProductIds),
                },
                relations: {
                    product_images: {
                        image: true,
                        placeholder_image: true,
                    },
                    product_price: true,
                },
            }
        );
    }

    findOne(options: FindOneOptions<Product>): Promise<Product> {
        return this.productRepository.findOne(options);
    }

    async create(
        dto: CreateProductDto,
        files: Express.Multer.File[]
    ): Promise<Product> {
        return this.transactionService.executeTransition<Product>(async (queryRunner: QueryRunner) => {
            const slug = StringService.slugify(dto.name);

            const productWithDtoSlug = await this.productRepository.findOneBy({ slug });
            if (productWithDtoSlug) {
                throw new BadRequestException('Product with this name already exists');
            }

            const product_images = await Promise.all(
                files.map((file: Express.Multer.File, index: number) => {
                    return this.productImageService.create(queryRunner, file, { order: index + 1 });
                })
            );

            const product_price = await this.productPriceService.create(queryRunner, {
                price: dto.price,
            });

            return queryRunner.manager.save(Product, {
                ...dto,
                slug,
                product_images,
                product_price,
            });
        });
    }
}
