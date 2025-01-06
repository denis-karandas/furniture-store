import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryRunner, Repository } from 'typeorm';
import { createReadStream, ReadStream } from 'fs';
import { StorageService } from 'modules/storage/storage.service';
import { Image } from './image.entity';
import { CreateImageDto } from './dto';
import { dayjs } from 'libs';

@Injectable()
export class ImageService {
    constructor(
        @InjectRepository(Image)
        private readonly imageRepository: Repository<Image>
    ) {}

    async getImage(dto: any): Promise<ReadStream> {
        const image = await this.imageRepository.findOneBy({ id: dto.id });
        if (!image) {
            throw new BadRequestException('File not found');
        }
        
        const date = dayjs(image.created_at);
        const path = StorageService.getPath(date, dto.folder_name, dto.file_name, dto.file_extension);

        return createReadStream(path);
    }

    async create(queryRunner: QueryRunner, dto: CreateImageDto): Promise<Image> {
        return queryRunner.manager.save(Image, dto);
    }
}
