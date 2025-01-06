import { Injectable } from '@nestjs/common';
import { Extension, MimeType } from './file.enums';

@Injectable()
export class FileService {
    static getMimeTypeByExtension(extension: string): string {
        switch (extension) {
            case Extension.PNG:
                return MimeType.PNG;
            case Extension.JPG:
                return MimeType.JPG;
            case Extension.JPEG:
                return MimeType.JPEG;
            case Extension.WEBP:
                return MimeType.WEBP;
            default:
                return '';
        }
    }
}
