import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
    constructor(
        private readonly productService: ProductService,
    ) {}

    @Get()
    findAll() {
        return this.productService.findAll();
    }

    @Get('featured')
    findAllFeatured() {
        return this.productService.findAllFeatured();
    }

    @Get('top')
    findAllTop() {
        return this.productService.findAllTop();
    }

    @Post()
    create(@Body() dto: any) {
        return this.productService.create(dto);
    }
}