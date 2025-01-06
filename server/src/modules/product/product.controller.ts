import { Body, Controller, Get, Post, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Pagination } from 'nestjs-typeorm-paginate';
import { StorageService } from 'modules/storage/storage.service';
import { ProductService } from './product.service';
import { CreateProductDto, FindAllProductsDto, FindBestSellersProductsDto, FindFeaturedProductsDto, FindRecentProductsDto, FindTopProductsDto, FindTrendingProductsDto } from './dto';
import { Product } from './product.entity';

// @UseGuards(JwtGuard)
@Controller('products')
export class ProductController {
    constructor(
        private readonly productService: ProductService,
    ) {}

    @Get()
    async findAll(@Query() dto: FindAllProductsDto): Promise<Pagination<Product>> {
        return this.productService.findAll(dto);
    }

    @Get('top')
    async findTop(@Query() dto: FindTopProductsDto): Promise<Pagination<Product>> {
        return this.productService.findAll(dto); // TODO: mock data
    }

    @Get('recent')
    async findRecent(@Query() dto: FindRecentProductsDto): Promise<Pagination<Product>> {
        return this.productService.findAll(dto); // TODO: mock data
    }

    @Get('trending')
    async findTrending(@Query() dto: FindTrendingProductsDto): Promise<Pagination<Product>> {
        return this.productService.findAll(dto); // TODO: mock data
    }

    @Get('best-sellers')
    async findBestSellers(@Query() dto: FindBestSellersProductsDto): Promise<Pagination<Product>> {
        return this.productService.findAll(dto); // TODO: mock data
    }

    @Get('featured')
    async findFeatured(@Query() dto: FindFeaturedProductsDto): Promise<Pagination<Product>> {
        return this.productService.findAll(dto); // TODO: mock data
    }

    @Post()
    @UseInterceptors(
        FilesInterceptor('images', 10, { storage: StorageService.tempStorage() })
    )
    create(
        @Body() dto: CreateProductDto,
        @UploadedFiles() images: Express.Multer.File[]
    ): Promise<Product> {
        return this.productService.create(dto, images);
    }
}