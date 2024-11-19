import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>
    ) {}

    findAll(): Promise<Product[]> { // TODO: in progress
        return this.productRepository.find(); 
    }

    findAllFeatured(): Promise<Product[]> { // TODO: in progress
        return this.productRepository.find();
    }

    findAllTop(): Promise<Product[]> { // TODO: in progress
        return this.productRepository.find();
    }

    create(dto: any): Promise<Product> { // TODO: in progress
        return this.productRepository.save(dto);
    }
}
