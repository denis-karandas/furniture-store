import { Controller, Get, Param, Res, StreamableFile } from '@nestjs/common';
import { Response } from 'express';
import { FileService } from 'modules/file/file.service';
import { ImageService } from './image.service';

@Controller('images')
export class ImageController {
    constructor(private readonly imageService: ImageService) {}

    @Get('/:id/:folder_name/:file_name.:file_extension')
    async getImage(
        @Param() dto: any,
        @Res({ passthrough: true }) res: Response,
    ) {
        const file = await this.imageService.getImage(dto);

        res.set('Content-Type', FileService.getMimeTypeByExtension(dto.file_extension));
        res.set('Cache-Control', 'max-age=259200');

        return new StreamableFile(file);
    }
}
