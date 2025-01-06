import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryRunner, Repository } from 'typeorm';
import { paginate, Pagination, PaginationTypeEnum } from 'nestjs-typeorm-paginate';
import { TransactionService } from 'modules/transaction/transaction.service';
import { ProductImageService } from 'modules/product-image/product-image.service';
import { StringService } from 'modules/string/string.service';
import { ProductPriceService } from 'modules/product-price/product-price.service';
import { Product } from './product.entity';
import { CreateProductDto, FindAllProductsDto } from './dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
        private readonly transactionService: TransactionService,
        private readonly productImageService: ProductImageService,
        private readonly productPriceService: ProductPriceService,
    ) {}

    findAll({ limit = 10, page = 1 }: FindAllProductsDto): Promise<Pagination<Product>> {
        return paginate(
            this.productRepository,
            {
                limit,
                page,
                paginationType: PaginationTypeEnum.TAKE_AND_SKIP,
            },
            {
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
