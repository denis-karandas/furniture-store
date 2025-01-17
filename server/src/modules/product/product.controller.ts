import { Body, Controller, Get, Post, Query, Req, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Pagination } from 'nestjs-typeorm-paginate';
import { StorageService } from 'modules/storage/storage.service';
import { ProductService } from './product.service';
import { CreateProductDto, FindAllProductsDto, FindBestSellersProductsDto, FindFeaturedProductsDto, FindRecentProductsDto, FindTopProductsDto, FindTrendingProductsDto } from './dto';
import { Product } from './product.entity';
import { Request } from 'express';
import { JwtGuard } from 'guards';

@UseGuards(JwtGuard)
@Controller('products')
export class ProductController {
    constructor(
        private readonly productService: ProductService,
    ) {}

    @Get()
    async findAll(
        @Req() req: Request,
        @Query() dto: FindAllProductsDto
    ): Promise<Pagination<Product>> {
        return this.productService.findAll(dto, req.user.id);
    }

    @Get('top')
    async findTop(
        @Req() req: Request,
        @Query() dto: FindTopProductsDto
    ): Promise<Pagination<Product>> {
        return this.productService.findTop(dto, req.user.id);
    }

    @Get('recent')
    async findRecent(
        @Req() req: Request,
        @Query() dto: FindRecentProductsDto
    ): Promise<Pagination<Product>> {
        return this.productService.findRecent(dto, req.user.id);
    }

    @Get('trending')
    async findTrending(
        @Req() req: Request,
        @Query() dto: FindTrendingProductsDto
    ): Promise<Pagination<Product>> {
        return this.productService.findTrending(dto, req.user.id);
    }

    @Get('best-sellers')
    async findBestSellers(
        @Req() req: Request,
        @Query() dto: FindBestSellersProductsDto
    ): Promise<Pagination<Product>> {
        return this.productService.findBestSellers(dto, req.user.id);
    }

    @Get('featured')
    async findFeatured(
        @Req() req: Request,
        @Query() dto: FindFeaturedProductsDto
    ): Promise<Pagination<Product>> {
        return this.productService.findFeatured(dto, req.user.id);
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