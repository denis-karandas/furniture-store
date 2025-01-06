import { Injectable } from '@nestjs/common';
import { QueryRunner } from 'typeorm';
import * as sharp from 'sharp';
import { join } from 'path';
import { unlink } from 'fs/promises';
import { ProductImage } from './product-image.entity';
import { CreateProductImageDto } from './dto';
import { Extension } from 'modules/image/image.enums';
import { StorageService } from 'modules/storage/storage.service';
import { ImageService } from 'modules/image/image.service';
import { Image } from 'modules/image/image.entity';
import { IStorageFolder } from 'modules/storage/storage.interfaces';

@Injectable()
export class ProductImageService {
    constructor(
        private readonly imageService: ImageService,
    ) {}

    async create(
        queryRunner: QueryRunner,
        file: Express.Multer.File,
        { order }: CreateProductImageDto
    ): Promise<ProductImage> {
        const storageFolder = await StorageService.createFolder();

        const image = await this.createMainImage(queryRunner, file, storageFolder);
        const placeholder_image = await this.createPlaceholderImage(queryRunner, file, storageFolder);

        await unlink(file.path);

        return queryRunner.manager.save(ProductImage, {
            image,
            placeholder_image,
            order,
        });
    }

    private async createMainImage(
        queryRunner: QueryRunner,
        file: Express.Multer.File,
        folder: IStorageFolder
    ): Promise<Image> {
        const fileName = await StorageService.generateFileName(folder.path);
        const fileExtension = Extension.WEBP;
        const pathToFile = join(folder.path, fileName + '.' + fileExtension);


        await sharp(file.path)
            .webp({ quality: 100 })
            .toFile(pathToFile);

        return this.imageService.create(queryRunner, {
            folder_name: folder.name,
            file_name: fileName,
            file_extension: fileExtension,
        });
    }

    private async createPlaceholderImage(
        queryRunner: QueryRunner,
        file: Express.Multer.File,
        folder: IStorageFolder
    ): Promise<Image> {
        const fileName = await StorageService.generateFileName(folder.path);
        const fileExtension = Extension.WEBP;
        const pathToFile = join(folder.path, fileName + '.' + fileExtension);

        await sharp(file.path)
            .webp({ quality: 10 })
            .toFile(pathToFile);
        
        return this.imageService.create(queryRunner, {
            folder_name: folder.name,
            file_name: fileName,
            file_extension: fileExtension,
        });
    }
}
